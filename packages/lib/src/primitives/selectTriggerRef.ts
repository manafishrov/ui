// Workaround for https://github.com/chakra-ui/ark/issues/3146
// SolidJS event delegation causes interact-outside to close the select on pointerdown,
// Then the delegated click re-opens it. We suppress that click when already open.
export const createSelectTriggerRef = (
  forwardRef?: (element: HTMLButtonElement) => void,
): ((element: HTMLButtonElement) => void) => {
  let suppressNextClick = false;

  return (element: HTMLButtonElement): void => {
    element.addEventListener(
      'pointerdown',
      () => {
        if (element.getAttribute('aria-expanded') === 'true') {
          suppressNextClick = true;
        }
      },
      true,
    );
    element.addEventListener(
      'click',
      (event) => {
        if (suppressNextClick) {
          suppressNextClick = false;
          event.stopPropagation();
        }
      },
      true,
    );
    if (forwardRef) {
      forwardRef(element);
    }
  };
};
