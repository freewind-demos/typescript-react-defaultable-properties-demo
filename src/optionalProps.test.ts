import {expectTypeOf} from 'expect-type'
import optionalProps from "./optionalProps";

type Props = {
  name: string,
  city?: string;
  emails?: string[],
}

describe('optionalProps', () => {

  const normalProps: Props = {name: 'test-name'};

  describe('withAll', () => {
    it('infers to correct type if the type of all values are accurate', () => {
      const defaultProps = optionalProps<Props>().withAll({
        city: 'test-city',
        emails: ['test-email']
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ city: string, emails: string[] }>()
    })

    it('infers to never[] if array type is not accurate, but it still works with our defaultProps pattern', () => {
      const defaultProps = optionalProps<Props>().withAll({
        city: 'test-city',
        emails: []
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ city: string, emails: never[] }>()
      const {emails} = {...defaultProps, ...normalProps}
      expectTypeOf(emails).toEqualTypeOf<string[]>();
    })
  })

  describe('withSome', () => {
    it('accepts partial type of optional properties', () => {
      const defaultProps = optionalProps<Props>().withSome({
        city: 'test-city'
        // no "emails" provided
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ city: string }>()
    })

    it('infers to never[] if array type is not accurate, but it still works with our defaultProps pattern', () => {
      const defaultProps = optionalProps<Props>().withSome({
        emails: []
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ emails: never[] }>()
      const {emails} = {...defaultProps, ...normalProps}
      expectTypeOf(emails).toEqualTypeOf<string[]>();
    })
  })
})
