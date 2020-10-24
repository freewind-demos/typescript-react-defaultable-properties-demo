/* eslint-disable-next-line jest/expect-expect */
import {expectTypeOf} from 'expect-type'
import {CommonOptionalOrUndefinedKeyNameAsValue} from "./CommonOptionalOrUndefinedKeyNameAsValue";

type Props1 = {
  aaa: string,
  bbb?: string,
  ccc: string,
  ddd: string | undefined,
  xxx: string
}

type Props2 = {
  aaa: string,
  bbb: string,
  ccc?: string,
  ddd: string,
  yyy?: string
}

describe('CommonOptionalOrUndefinedKeyNameAsValue', () => {
  it('ss', () => {
    type Props1 = { aaa: string }
    type Props2 = { aaa: string }
    expectTypeOf<CommonOptionalOrUndefinedKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{ aaa: never }>();
  })
  it('ss', () => {
    type Props1 = { aaa: string | undefined }
    type Props2 = { aaa: string }
    expectTypeOf<CommonOptionalOrUndefinedKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{ aaa: never }>();
  })
  it('ss', () => {
    type Props1 = { aaa: string }
    type Props2 = { aaa?: string }
    expectTypeOf<CommonOptionalOrUndefinedKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{ aaa: 'aaa' }>();
  })
  it('ss', () => {
    type Props1 = { aaa: string }
    type Props2 = { aaa: string | undefined }
    expectTypeOf<CommonOptionalOrUndefinedKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{ aaa: 'aaa' }>();
  })

  it('ss', () => {
    type Props1 = { aaa: string | undefined }
    type Props2 = { aaa: string | undefined }
    expectTypeOf<CommonOptionalOrUndefinedKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{ aaa: 'aaa' }>();
  })

  it('ss', () => {
    type Props1 = { aaa: string }
    type Props2 = { aaa: string | null }
    expectTypeOf<CommonOptionalOrUndefinedKeyNameAsValue<Props1, Props2>>().toEqualTypeOf<{ aaa: never }>();

    expectTypeOf<string | null>().toMatchTypeOf<string>();
  })
})
