import {expectTypeOf} from 'expect-type'
import {OptionalKeys} from "./OptionalKeys";

type Props = {
  aaa: string,
  bbb?: string;
  ccc: string | undefined;
  ddd: string | null;
}

describe('OptionalKeys', () => {
  it('gets only optional key names', () => {
    expectTypeOf<OptionalKeys<Props>>().toEqualTypeOf<'bbb'>()
  })
})
