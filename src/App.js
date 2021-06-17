import { useState } from 'react'
import Search from './components/Search'
import markData from './data/mark'

import './App.css'

const App = () => {
  const [word, setWord] = useState('')

  const searchWord = event => {
    event.preventDefault()
    console.log(markData.chapters[0], word)
  }

  const handleInput = event => {
    let input = event.target.value
    setWord(input)
  }

  return (
    <div id='main_div'>
      <Search searchWord={searchWord} handleInput={handleInput} />
      <p>{word}</p>
    </div>
  )
}

export default App