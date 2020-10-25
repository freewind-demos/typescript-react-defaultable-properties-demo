import {expectTypeOf} from 'expect-type'
import {BNoExcessA} from "./BNoExcessA";

type A = {
  aaa: string,
  bbb: string,
  ccc: string
};

type B = {
  aaa: string,
  bbb: number,
  ddd: string
};

describe('BNoExcessA', () => {
  it('creates a new type which sets "never" type to extra properties than common properties in A', () => {
    expectTypeOf<BNoExcessA<A, B>>().toEqualTypeOf<{ aaa: string, bbb: string, ddd: never }>()
  })
})
