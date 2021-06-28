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
    // iterate through chapters
      markData.chapters.forEach((element, index) => {
        let chapter = index + 1
        let verse = 0
        let text = ''
        // iterate through verses
        element.verses.forEach((element, index) => {
          let textArr = element.text.split(/([ .,:;])+/gi)
          // console.log(textArr)
          // check if verse contains search query
          if (textArr.includes(word)) {
            verse = index + 1
            text = textArr.join('')
            textArr.forEach((element, index, array) => {
              if (element === word) {
                let newTextArr = textArr
                // newTextArr[index] = `<strong>${element}</strong>`
                text = newTextArr.join('')
                console.log(newTextArr)
                searchArr.push({chapter: chapter, verse: verse, text: text, array: array, index: index})
                newTextArr[index] = element
              }
            })
          }
        })
      })
      console.log('SEARCH ARRAY', searchArr)
      setResults(searchArr)
  }

  return (
    <div id='main_div'>
      <Search searchWord={searchWord} handleInput={handleInput} />
      <p id='results_badge'>{results.length} Results</p>
      <Results results={results} input={word} />
    </div>
  )
}

export default App