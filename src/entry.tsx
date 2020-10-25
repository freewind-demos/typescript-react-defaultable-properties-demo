import React from 'react'
import ReactDOM from 'react-dom'

import {HelloWithAllDefaultProps, HelloWithInplaceDefaultProps, HelloWithSomeDefaultProps} from './hello'

ReactDOM.render(
  <div>
    <HelloWithInplaceDefaultProps name='React'/>
    <HelloWithInplaceDefaultProps name='React' city={undefined} emails={undefined}/>
    <HelloWithAllDefaultProps name='React'/>
    <HelloWithAllDefaultProps name='React' city={undefined} emails={undefined}/>
    <HelloWithSomeDefaultProps name='React'/>
    <HelloWithSomeDefaultProps name='React' city={undefined} emails={undefined}/>
  </div>,
  document.body
)
