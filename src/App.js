import { useState } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import markData from './data/mark'

import './App.css'

const App = () => {
  const [word, setWord] = useState('')
  const [results, setResults] = useState([])

  const handleInput = event => {
    let input = event.target.value
    setWord(input)
  }

  const searchWord = event => {
    event.preventDefault()
    let searchArr = []
      markData.chapters.forEach((element, index) => {
        let chapter = index + 1
        let verse = 0
        let text = ''
        element.verses.forEach((element, index) => {
          if (element.text.includes(word)) {
            verse = index + 1
            text = element.text
            searchArr.push({chapter: chapter, verse: verse, text: text})
          }
        })
      })
      searchArr.push(searchArr)
      console.log(searchArr)
  }

  return (
    <div id='main_div'>
      <Search searchWord={searchWord} handleInput={handleInput} />
      <p>{word}</p>
      <Results />
    </div>
  )
}

export default App