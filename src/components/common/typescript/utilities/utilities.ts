export const numberFromRange = (x: number, min = 0, max = 0): number => {
  return Math.max(min, Math.min(x, max));
};
