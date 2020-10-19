import {expectTypeOf} from 'expect-type'
import {NoExcess} from "./NoExcess";

type Props1 = {
  aaa: string,
  bbb: string,
  ccc: string
};
type Props2 = {
  aaa: string,
  bbb: number,
  ddd: string
};

describe('NoExcess', () => {
  it('adds extra properties to common properties with "never" type', () => {
    expectTypeOf<NoExcess<Props1, Props2>>().toEqualTypeOf<{ aaa: string, bbb: string, ddd: never }>()
  })
})
