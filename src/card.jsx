import { useState } from 'react'
import './App.css'

function Card(prop) {
  const [backSide, reveal] = useState(false)
  console.log(questions)
  const showAnswer = () => reveal(true)
  const hideAnswer = () => reveal(false)

  return (
    <>
      <div onClick={showAnswer} className={backSide ? 'flashCard revealed' : 'flashCard hidden'}>
        <h1>{prop.question}</h1>
      </div>
      <div onClick={hideAnswer} className={backSide ? 'flashCard hidden' : 'flashCard revealed'}>
        <h1>{prop.answer}</h1>
      </div>
    </>
  )
}

export default Card
