import React from 'react'
import {DefaultOptionalProps} from "./DefaultOptionalProps";

type Props = {
  name: string,
  email?: string,
}

const defaultProps: DefaultOptionalProps<Props> = {
  email: ''
}

function helloContent(name: string, email: string): string {
  return `Hello ${name}, ${email}`;
}

export default function Hello(props: Props) {
  const {name, email} = {...defaultProps, ...props};

  return <div>
    <h1>${helloContent(name, email)}</h1>
  </div>
};
