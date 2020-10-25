import {expectTypeOf} from 'expect-type'
import {UndefinableKeys} from "./UndefinableKeys";

type Props = {
  aaa: string,
  bbb?: string,
  ccc: string | undefined,
  ddd?: string | undefined,
  eee: string | undefined | null
}

describe('UndefinableKeys', () => {
  it('gets undefinable keys from a type', () => {
    expectTypeOf<UndefinableKeys<Props>>().toEqualTypeOf<'bbb' | 'ccc' | 'ddd' | 'eee'>()
  })
})
