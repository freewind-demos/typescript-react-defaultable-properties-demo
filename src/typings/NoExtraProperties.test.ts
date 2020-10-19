import {expectTypeOf} from 'expect-type'
import {NoExtraProperties} from "./NoExtraProperties";

type Props1 = {
  aaa: string,
  bbb: string
}

type Props2 = {
  aaa: string,
  ccc: string,
}

describe('NoExtraProperties', () => {
  // eslint-disable-next-line jest/expect-expect
  it('sets extra properties as "never" type to prevent it from using', () => {
    expectTypeOf<NoExtraProperties<Props1, Props2>>().toEqualTypeOf<{
      aaa: string,
      bbb: string,
      ccc: never,
    }>();
  })
})
