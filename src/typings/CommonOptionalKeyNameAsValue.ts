export type CommonOptionalKeyNameAsValue<A, B> = {
  [K in keyof A & keyof B]: A[K] extends B[K] ? never : K;
};
