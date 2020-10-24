export type CommonOptionalOrUndefinedKeyNameAsValue<A, B> = {
  [K in keyof A & keyof B]: B[K] extends A[K] ? never : K;
};
