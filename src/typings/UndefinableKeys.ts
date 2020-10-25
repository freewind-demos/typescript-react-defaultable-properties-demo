export type UndefinableKeys<T> = {
  [key in keyof T]-?: undefined extends T[key] ? key : never
} [keyof T];
