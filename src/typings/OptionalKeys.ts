import {CommonOptionalKeyNameAsValue} from "./CommonOptionalKeyNameAsValue";

export type OptionalKeys<T> = CommonOptionalKeyNameAsValue<T, Required<T>>[keyof T];
