import fs from 'node:fs';
import path from 'node:path';

const toKebabCase = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

const glob = new Bun.Glob('packages/**/*.{ts,tsx}');

for await (const file of glob.scan('.')) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/IconIc[A-Za-z0-9]+/g)];

  if (matches.length === 0) continue;

  const uniqueIcons = [...new Set(matches.map((m) => m[0]))];

  const iconsToAdd = uniqueIcons.filter((icon) => !content.includes(`import ${icon} from`));

  if (iconsToAdd.length === 0) continue;

  const importStatements = iconsToAdd
    .map((icon) => {
      let iconName = icon.replace('IconIc', '');
      let kebabName = toKebabCase(iconName);
      return `import ${icon} from '~icons/ic/${kebabName}';`;
    })
    .join('\n');

  const lines = content.split('\n');
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportIndex = i;
    }
  }

  if (lastImportIndex !== -1) {
    lines.splice(lastImportIndex + 1, 0, importStatements);
  } else {
    lines.unshift(importStatements);
  }

  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log(`Updated ${file} with imports: ${iconsToAdd.join(', ')}`);
}
