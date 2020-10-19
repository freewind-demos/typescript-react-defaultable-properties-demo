import {OptionalKeys} from "./OptionalKeys";

export type OptionalPartAsRequired<T> = {
  [key in OptionalKeys<T>]: NonNullable<T[key]>
}
