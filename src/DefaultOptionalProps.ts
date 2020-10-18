type OptionalKeysOf<T extends object> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>

type OptionalPartOf<T extends object> = {
  [key in OptionalKeysOf<T>]: NonNullable<T[key]>
}

export type DefaultOptionalProps<T extends object> = OptionalPartOf<T>;

