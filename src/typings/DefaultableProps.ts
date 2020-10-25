import {NonUndefinable} from "./NonUndefinable";
import {UndefinableKeys} from "./UndefinableKeys";

export type DefaultableProps<A> = {
  [key in UndefinableKeys<A>]: NonUndefinable<A[key]>
}
