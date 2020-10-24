/* eslint-disable-next-line jest/expect-expect */
import {expectTypeOf} from 'expect-type'
import {Defined} from "./Defined";
import {RequiredDefinedProps} from "./RequiredDefinedProps";

describe('RequiredDefinedProps', () => {
  it('x', () => {
    type Props = {
      aaa: string
    }
    expectTypeOf<RequiredDefinedProps<Props>>().toEqualTypeOf<Props>();
  })
  it('x', () => {
    type Props = {
      aaa: undefined
    }
    expectTypeOf<RequiredDefinedProps<Props>>().toEqualTypeOf<{ aaa: never }>();
  })
  it('x', () => {
    type Props = {
      aaa: null
    }
    expectTypeOf<RequiredDefinedProps<Props>>().toEqualTypeOf<{ aaa: null }>();
  })

  it('x', () => {
    type Props = {
      aaa: string | undefined
    }
    expectTypeOf<RequiredDefinedProps<Props>>().toEqualTypeOf<{ aaa: string }>();
  })

  it('x', () => {
    type Props = {
      aaa: string | undefined | null
    }
    expectTypeOf<RequiredDefinedProps<Props>>().toEqualTypeOf<{ aaa: string | null }>();
  })
})
