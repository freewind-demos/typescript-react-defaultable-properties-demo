import {expectTypeOf} from 'expect-type'
import {NonUndefinable} from "./NonUndefinable";

describe('NonUndefinable', () => {
  it('creates a new type excluded undefined type', () => {
    expectTypeOf<NonUndefinable<string | undefined | null>>().toEqualTypeOf<string | null>()
  })
})
