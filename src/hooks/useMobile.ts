import { useMediaQuery } from './useMediaQuery';

export const useIsMobile = (): (() => boolean) => useMediaQuery('(max-width: 768px)');
