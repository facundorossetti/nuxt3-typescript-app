export const incrementValue = (value?: number) => useState<number>('counter', () => value || 0);
