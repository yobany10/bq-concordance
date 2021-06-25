import './Verse.css'

const Verse = props => {
    let textStr = "" + props.data.text
    return (
        <div class='verse_card'>
            <h3 class='verse_order'>{props.order}</h3>
            <h3>Mark {props.data.chapter}:{props.data.verse}</h3>
            <span>
                {/* {textArr.slice(0, props.data.index).join('')} */}
                {textStr.split(/([ .,:;])+/gi).slice(0, props.data.index).join('')}
                <strong>{textStr.split(/([ .,:;])+/gi)[props.data.index]}</strong>
                {textStr.split(/([ .,:;])+/gi).slice(props.data.index + 1, props.data.index + 11).join('')}
            </span>
        </div>
    )
}

export default Verse