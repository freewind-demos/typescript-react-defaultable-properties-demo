import {expectTypeOf} from 'expect-type'
import defaultableProps from "./defaultableProps";
import {DefaultableProps} from "./typings/DefaultableProps";

type Props = {
  aaa: string,
  bbb?: string | number;
  ccc?: string[] | boolean,
  ddd: string | undefined | null
}

describe('defaultableProps', () => {

  describe('withAll', () => {
    it('infers to correct type if the type of all values are accurate', () => {
      const defaultProps = defaultableProps<Props>().withAll({
        bbb: 'BBB',
        ccc: ['CCC'],
        ddd: 'DDD'
      })
      expectTypeOf(defaultProps).toEqualTypeOf<DefaultableProps<Props>>()
    })

    it('infers to correct types for empty array', () => {
      const defaultProps = defaultableProps<Props>().withAll({
        bbb: 'test-bbb',
        ccc: [],
        ddd: null
      })
      expectTypeOf(defaultProps).toEqualTypeOf<DefaultableProps<Props>>()
    })
  })

  describe('withSome', () => {
    const normalProps: Props = {aaa: 'AAA', ddd: 'DDD'};

    it('infers to correct type if passing all defaultable properties', () => {
      const defaultProps = defaultableProps<Props>().withSome({
        bbb: 'BBB',
        ccc: ['CCC'],
        ddd: 'DDD'
      })
      expectTypeOf(defaultProps).toEqualTypeOf<DefaultableProps<Props>>()
    })

    it('accepts partial type of optional properties', () => {
      const defaultProps = defaultableProps<Props>().withSome({
        bbb: 'test-bbb'
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ bbb: string | number }>()
    })

    it('infers to correct types for empty array values', () => {
      const defaultProps = defaultableProps<Props>().withSome({
        ccc: []
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ ccc: string[] | boolean }>()
    })

    it('infers to correct types for null values', () => {
      const defaultProps = defaultableProps<Props>().withSome({
        ddd: null
      })
      expectTypeOf(defaultProps).toEqualTypeOf<{ ddd: string | null }>()
    })

    // it('not allow undefined values', () => {
    //   const defaultProps = defaultableProps<Props>().withSome({
    //     // compilation error
    //     bbb: undefined,
    //   })
    //   expectTypeOf(defaultProps).toEqualTypeOf<{ bbb: string | number | undefined }>()
    // })
  })
})
