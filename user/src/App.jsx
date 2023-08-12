import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'host/components/Header'
import './index.css'

const App = () => (
  <div className='container'>
    <Header />
    <div>Name: user</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
