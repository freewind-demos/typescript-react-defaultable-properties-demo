import React from 'react'
import defaultableProps from "./defaultableProps";
import mergeDefaultProps from "./mergeDefaultProps";

type Props = {
  name: string,
  city?: string | number;
  emails: string[] | undefined,
}

const allDefaultProps = defaultableProps<Props>().withAll({
  city: 555,
  emails: ['test1@test.com'],
});

const someDefaultProps = defaultableProps<Props>().withSome({
  emails: ['test2@test.com'],
  // city: undefined,
  // nonExist: 'will-have-compilation-error'
})

function helloContent(name: string, city: string | number, emails: string[]): string {
  return `Hello ${name}, ${emails}, ${city}`;
}

export function HelloWithInplaceDefaultProps(props: Props) {
  const {name, city = 666, emails = ['inplace-email']} = props;
  return <div>
    <h1>HelloWithAllDefaultProps: {helloContent(name, city, emails)}</h1>
  </div>
}

export function HelloWithAllDefaultProps(props: Props) {
  const {name, city, emails} = mergeDefaultProps(props, allDefaultProps);
  return <div>
    <h1>HelloWithAllDefaultProps: {helloContent(name, city, emails)}</h1>
  </div>
}

export function HelloWithSomeDefaultProps(props: Props) {
  const {name, city, emails} = mergeDefaultProps(props, someDefaultProps);
  return <div>
    <h1>HelloWithSomeDefaultProps: {helloContent(name, city ?? 'no-passing-city', emails)}</h1>
  </div>
}
