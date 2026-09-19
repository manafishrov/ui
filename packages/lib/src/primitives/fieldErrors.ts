export const fieldErrorMessages = (errors: readonly unknown[] = []): string[] => {
  const messages: string[] = [];
  for (const error of errors) {
    if (typeof error === 'string') {
      messages.push(error);
    } else if (
      error !== null &&
      typeof error === 'object' &&
      'message' in error &&
      typeof error.message === 'string'
    ) {
      messages.push(error.message);
    }
  }
  return [...new Set(messages)];
};
