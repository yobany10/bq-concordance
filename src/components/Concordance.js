import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Search from './Search'
import Results from './Results'
import material from '../data/material'
import './Concordance.css'

const Concordance = props => {
    const [word, setWord] = useState('')
    const [results, setResults] = useState([])
    
    let { query } = useParams()

    const handleInput = event => {
      let input = event.target.value
      console.log(input)
      setWord(input)
    }

    const searchWord = event => {
        event.preventDefault()
        let searchArr = []
        // iterate through chapters
        material.forEach((element, index) => {
            let book = element.book
            element.chapters.forEach((element, index) => {
              let chapter = element.chapter
              let verse = 0
              let text = ''
              // iterate through verses
              element.verses.forEach((element, index) => {
                let textArr = element.text.split(/([ .,:;])+/gi)
                // check if verse contains search query
                if (textArr.includes(word)) {
                  verse = element.verse
                  text = textArr.join('')
                  textArr.forEach((element, index, array) => {
                    if (element === word) {
                      let newTextArr = textArr
                      text = newTextArr.join('')
                    // console.log(newTextArr)
                      searchArr.push({book: book, chapter: chapter, verse: verse, text: text, array: array, index: index})
                      newTextArr[index] = element
                    }
                  })
                }
              })
            })
        })
        console.log('SEARCH ARRAY', searchArr)
        setResults(searchArr)
      }

    return (
        <div id='concordance_div'>
            <Link to={`/`} id='search_title_link' className='remove_link_style'>
                <h1 id='search_title'>BQ CONCORDANCE™</h1>
            </Link>
            <Search handleInput={handleInput} query={word} searchWord={searchWord}/>
            <p id='results_badge'>{results.length} Results</p>
            <Results results={results} input={word} />
        </div>
    )
}

export default Concordance