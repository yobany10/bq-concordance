import './Verse.css'

const Verse = props => {
    let textStr = "" + props.data.text
    return (
        <div className='verse_card scale-in-ver-center'>
            <h3 className='verse_ref'>{props.data.book} {props.data.chapter}:{props.data.verse}</h3>
            <span>
                {textStr.split(/([ .,:;])+/gi).slice((props.data.index - 11), props.data.index).join('')}
                <strong className='verse_query'>{textStr.split(/([ .,:;])+/gi)[props.data.index]}</strong>
                {textStr.split(/([ .,:;])+/gi).slice(props.data.index + 1, props.data.index + 11).join('')}
            </span>
        </div>
    )
}

export default Verse