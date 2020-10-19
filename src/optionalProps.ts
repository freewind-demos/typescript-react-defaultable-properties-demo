type DiffProperties<A, B> = {
  [K in keyof A & keyof B]:
  A[K] extends B[K]
    ? never
    : K
};

type OptionalKeys<T> = DiffProperties<T, Required<T>>[keyof T];

export type OptionalPartOf<T> = {
  [key in OptionalKeys<T>]: NonNullable<T[key]>
}

export default function optionalProps<P extends object>() {
  return {
    withAll: <DP extends OptionalPartOf<P>>(defaultProps: DP): DP => {
      return defaultProps
    },
    withSome: <DP extends Partial<OptionalPartOf<P>>>(defaultProps: DP): DP => {
      return defaultProps
    }
  }
}
