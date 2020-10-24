import {expectTypeOf} from 'expect-type'
import {OptionalOrUndefinedKeys} from "./OptionalOrUndefinedKeys";

type Props = {
  aaa: string,
  bbb?: string,
  ccc: string | undefined,
  ddd: undefined,
  eee: string | null;
}


describe('OptionalOrUndefinedKeys', () => {
  it('gets only optional or undefined key names', () => {
    const x: OptionalOrUndefinedKeys<Props> = 'sss'
    expectTypeOf<OptionalOrUndefinedKeys<Props>>().toEqualTypeOf<'bbb', 'ccc', 'ddd'>()
  })
})
