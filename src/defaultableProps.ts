import {DefaultableProps} from "./typings/DefaultableProps";

type DefaultablePropsBuilder<A> = {
  withAll: (defaultProps: DefaultableProps<A>) => typeof defaultProps
  withSome: <K extends keyof DefaultableProps<A>>(defaultProps: Pick<DefaultableProps<A>, K>) => typeof defaultProps;
};

export default function defaultableProps<P>(): DefaultablePropsBuilder<P> {
  return {
    withAll: (defaultProps) => defaultProps,
    withSome: (defaultProps) => defaultProps,
  };
}

