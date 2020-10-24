import {CommonOptionalOrUndefinedKeyNameAsValue} from "./CommonOptionalOrUndefinedKeyNameAsValue";

export type OptionalKeys<T> = CommonOptionalOrUndefinedKeyNameAsValue<T, Required<T>>[keyof T];
