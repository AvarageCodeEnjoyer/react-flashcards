import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './card.jsx'
import questions from './questions.json'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {questions.map(question => {
      <Card prop={question} />
    })}
  </React.StrictMode>,
)
