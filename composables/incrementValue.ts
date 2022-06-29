export const incrementValue = (value?: number) => {
  return useState<number>('counter', () => value | 0);
}