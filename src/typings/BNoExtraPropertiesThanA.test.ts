import {expectTypeOf} from 'expect-type'
import {BNoExtraPropertiesThanA} from "./BNoExtraPropertiesThanA";

type A = {
  aaa: string,
  bbb: string
}

type B = {
  aaa: string,
  ccc: string,
}

describe('BNoExtraPropertiesThanA', () => {
  // eslint-disable-next-line jest/expect-expect
  it('creates a new type which sets merges properties A & B, and set extra properties in B to "never" type to prevent them from using', () => {
    expectTypeOf<BNoExtraPropertiesThanA<A, B>>().toEqualTypeOf<{
      aaa: string,
      bbb: string,
      ccc: never,
    }>();
  })
})
