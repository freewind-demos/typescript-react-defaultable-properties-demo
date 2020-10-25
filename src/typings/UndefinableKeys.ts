// export type UndefinableKeys<T> = Exclude<{
//   [key in keyof T]: undefined extends T[key] ? key : never
// } [keyof T], undefined>;

export type UndefinableKeys<T> = {
  [key in keyof T]-?: undefined extends T[key] ? key : never
} [keyof T];
