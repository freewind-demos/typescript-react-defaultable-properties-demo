import {Defined} from "./Defined";

export type RequiredDefinedProps<T> = {
  [key in keyof T]-?: Defined<T[key]>
}
