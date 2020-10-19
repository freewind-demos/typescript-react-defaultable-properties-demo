import React from 'react'

import optionalProps from "./optionalProps";

type Props = {
  name: string,
  city?: string;
  emails?: string[],
}

const defaultProps = optionalProps<Props>().withAll({
  city: 'test-city',
  emails: [],
});

function helloContent(name: string, emails: string[], city: string): string {
  return `Hello ${name}, ${emails}, ${city}`;
}

export default function Hello(props: Props) {
  const {name, emails, city} = {...defaultProps, ...props};
  return <div>
    <h1>{helloContent(name, emails, city)}</h1>
  </div>
};
