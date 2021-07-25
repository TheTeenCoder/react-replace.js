import React from 'react'

import Replace, { Url } from 'react-replace'
import 'react-replace/dist/index.css'

const Test = () => {

  const replace = [
    Url({className: 'test'}),
  ]
  return (
    <div>
      <h1>Test</h1>
      <Replace replace={replace}>https://www.youtube.com lol</Replace>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Test />
    </div>
  )
}

export default App
