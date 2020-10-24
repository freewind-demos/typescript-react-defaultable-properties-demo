import React from 'react'

import optionalProps from "./optionalProps";

type Props = {
  name: string,
  city?: string;
  emails?: string[],

}

const allDefaultProps: { city: string, emails: never[] } = optionalProps<Props>().withAll({
  city: 'test-city',
  emails: [],
});

const someDefaultProps = optionalProps<Props>().withSome({
  city: 'test-city'
})

function helloContent(name: string, emails: string[], city: string): string {
  return `Hello ${name}, ${emails}, ${city}`;
}

export default function Hello(props: Props) {
  const {name, emails, city} = {...allDefaultProps, ...props};
  return <div>
    <h1>{helloContent(name, emails, city)}</h1>
  </div>
};
