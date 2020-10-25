import mergeDefaultProps from "./mergeDefaultProps";
import {DefaultableProps} from "./typings/DefaultableProps";

type Props = {
  aaa: string,
  bbb?: string,
  ccc: string | undefined,
  ddd: string | null
}

describe('mergeDefaultProps', () => {
  it('merges given default props to origin props only if the properties are undefined in origin props', () => {
    const props: Props = {
      aaa: 'AAA',
      bbb: 'BBB',
      ccc: undefined,
      ddd: null
    }
    const defaultProps: DefaultableProps<Props> = {
      bbb: 'default BBB',
      ccc: 'default CCC'
    }
    const newProps = mergeDefaultProps(props, defaultProps)
    expect(newProps).toEqual({
      aaa: 'AAA',
      bbb: 'BBB',
      ccc: 'default CCC',
      ddd: null
    })
  })
})
