import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import ConcordanceFilter from './ConcordanceFilter'
import Results from './Results'
import material from '../data/material'
import './Concordance.css'
import { useSelector } from 'react-redux'

const Concordance = props => {
  // redux state
    const division = useSelector((state) => state.division.value)
  // react state
    const [word, setWord] = useState('')
    const [results, setResults] = useState([])
    const [isCaseSensitive, setIsCaseSensitive] = useState(false)

    const handleInput = event => {
      let input = event.target.value
      console.log(input)
      setWord(input)
    }

    useEffect(() => {
      let searchArr = []
        // iterate through books
        material.forEach((element, index) => {
            let book = element.book
            // iterate through chapters found in a specific book
            element.chapters.forEach((element, index) => {
              let chapter = element.chapter
              let verse = 0
              let text = ''
              let isBeginner = false
              let isJunior = false
              let isIntermediate = false
              let isExperienced = false
              // iterate through verses found in a specific chapter
              element.verses.forEach((element, index) => {
                let textArr = element.text.split(/([ .,:;])+/gi)
                let upperCaseTextArr = textArr.map(item => item.toUpperCase())
                let upperCaseWord = word.toUpperCase()
                isBeginner = element.isBeginner
                isJunior = element.isJunior
                isIntermediate = element.isIntermediate
                isExperienced = element.isExperienced
                // check if verse contains search query
                if (upperCaseTextArr.includes(upperCaseWord)) {
                  verse = element.verse
                  text = textArr.join('')
                  textArr.forEach((element, index, array) => {
                    if (element.toUpperCase() === word.toUpperCase()) {
                      let newTextArr = textArr
                      text = newTextArr.join('')
                    // console.log(newTextArr)
                      searchArr.push({book: book, chapter: chapter, verse: verse, text: text, array: array, index: index, isBeginner: isBeginner, isJunior: isJunior, isIntermediate: isIntermediate, isExperienced: isExperienced})
                      newTextArr[index] = element
                    }
                  })
                }
              })
            })
        })
        searchArr = searchArr.filter(item => item[`${division}`] === true)
        console.log('SEARCH ARRAY', searchArr)
        setResults(searchArr)
    },[word])

    return (
        <div id='concordance_div'>
            <Link to={`/`} id='search_title_link' className='remove_link_style'>
                <h1 id='search_title'>BQ CONCORDANCE™</h1>
            </Link>
            <Search handleInput={handleInput} query={word} />
            <ConcordanceFilter />
            <p id='results_badge'>{results.length} {results.length === 1 ? 'Result' : 'Results'}</p>
            <Results results={results} input={word} />
        </div>
    )
}

export default Concordance