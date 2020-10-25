export type BNoExcessA<A, B> = {
  [key in keyof B]: key extends keyof A ? A[key] : never;
};
