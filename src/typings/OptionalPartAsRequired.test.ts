import {expectTypeOf} from 'expect-type'
import {OptionalKeys} from "./OptionalKeys";
import {OptionalPartAsRequired} from "./OptionalPartAsRequired";

type Props = {
  aaa: string,
  bbb?: string;
  ccc: string | undefined;
  ddd: string | null;
  eee?: string[]
}

describe('OptionalKeys', () => {
  it('gets optional properties and make them non-nullable', () => {
    expectTypeOf<OptionalPartAsRequired<Props>>().toEqualTypeOf<{ bbb: string, eee: string[] }>()
  })
})
