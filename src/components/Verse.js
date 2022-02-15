import {useState} from 'react'
import './Verse.css'

const Verse = props => {
    const [showFullText, setShowFullText] = useState(true)

    let textStr = "" + props.data.text

    const openVerse = () => {
        if (showFullText) {
            setShowFullText(false)
        } else {
            setShowFullText(true)
        }
    }

    return (
        <div className='verse_card scale-in-ver-center' onClick={openVerse}>
            <h3 className='verse_ref'>{props.data.book} {props.data.chapter}:{props.data.verse}</h3>
            <span>
                {textStr.split(/([ .,:;])+/gi).slice((props.data.index - (showFullText ? 999 : 11)), props.data.index).join('')}
                <strong className='verse_query'>{textStr.split(/([ .,:;])+/gi)[props.data.index]}</strong>
                {textStr.split(/([ .,:;])+/gi).slice(props.data.index + 1, props.data.index + (showFullText ? 999 : 11)).join('')}
            </span>
        </div>
    )
}

export default Verse