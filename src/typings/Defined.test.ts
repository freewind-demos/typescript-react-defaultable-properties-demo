/* eslint-disable-next-line jest/expect-expect */
import {expectTypeOf} from 'expect-type'
import {Defined} from "./Defined";

describe('Defined', () => {
  it('x', () => {
    expectTypeOf<Defined<string>>().toEqualTypeOf<string>();
  })
  it('x', () => {
    expectTypeOf<Defined<undefined>>().toEqualTypeOf<never>();
  })
  it('x', () => {
    expectTypeOf<Defined<null>>().toEqualTypeOf<null>();
  })

  it('x', () => {
    expectTypeOf<Defined<string | undefined>>().toEqualTypeOf<string>();
  })

  it('x', () => {
    expectTypeOf<Defined<string | undefined | null>>().toEqualTypeOf<string | null>();
  })
})
