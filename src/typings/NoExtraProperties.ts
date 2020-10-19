import {NoExcess} from "./NoExcess";

export type NoExtraProperties<T, P> = T & NoExcess<T, P>
