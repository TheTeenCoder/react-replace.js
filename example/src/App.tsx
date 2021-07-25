import React from 'react'

import Replace, { ExampleComponent, ExampleComponent2 } from 'react-replace'
import 'react-replace/dist/index.css'

const Test = () => {
  const replace = [
    { text: 'test', css: 'font-weight: bold;', className: 'test' }
  ]
  return (
    <div>
      <h1>Test</h1>
      <Replace replace={replace}>test what omg</Replace>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Test />
      <ExampleComponent text='Create React Library Example 😄' />
      <ExampleComponent2 text='text' />
    </div>
  )
}

export default App
