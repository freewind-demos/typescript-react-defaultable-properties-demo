import {NoExtraProperties} from "./typings/NoExtraProperties";
import {OptionalPartAsRequired} from "./typings/OptionalPartAsRequired";

type OptionalPropsBuilder<P extends object> = {
  withAll: <DP extends NoExtraProperties<OptionalPartAsRequired<P>, DP>>(defaultProps: DP) => DP;
  withSome: <DP extends NoExtraProperties<Partial<OptionalPartAsRequired<P>>, DP>>(defaultProps: DP) => DP;
};

export default function optionalProps<P extends object>(): OptionalPropsBuilder<P> {
  return {
    withAll: (defaultProps) => defaultProps,
    withSome: (defaultProps) => defaultProps,
  };
}

