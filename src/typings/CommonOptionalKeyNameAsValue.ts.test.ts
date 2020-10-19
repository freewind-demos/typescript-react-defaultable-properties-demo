import {expectTypeOf} from 'expect-type'
import {CommonOptionalKeyNameAsValue} from "./CommonOptionalKeyNameAsValue";

type Props1 = {
  aaa: string,
  bbb?: string,
  ccc: string,
  ddd: string
}

type Props2 = {
  aaa: string,
  bbb: string,
  ccc?: string,
  eee: string
}

describe('CommonOptionalKeyNameAsValue', () => {
  // eslint-disable-next-line jest/expect-expect
  it('gets common optional properties with key name as value', () => {
    expectTypeOf<CommonOptionalKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{
      aaa: never,
      bbb: 'bbb',
      ccc: never
    }>();
  })
})
