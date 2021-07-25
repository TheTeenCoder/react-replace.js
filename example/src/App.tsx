import React from 'react'

import Replace from 'react-replace'
import 'react-replace/dist/index.css'

const Test = () => {

  function fun() {
    console.log('test')
  }

  const replace = [
    { text: 'test', css: 'font-weight: bold;', className: "test", onClick: fun}
  ]
  return (
    <div>
      <h1>Test</h1>
      <Replace replace={replace}>test</Replace>
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
