import {expectTypeOf} from 'expect-type'
import {DefaultableProps} from "./DefaultableProps";

type Props = {
  aaa: string,
  bbb?: string,
  ccc: string | undefined,
  ddd?: string | undefined,
  eee: string | undefined | null
}
describe('DefaultableProps', () => {
  it('creates a new type which gets undefinable properties and make them non-undefinable', () => {
    expectTypeOf<DefaultableProps<Props>>().toEqualTypeOf<{
      bbb: string,
      ccc: string,
      ddd: string,
      eee: string | null,
    }>()
  })
})
