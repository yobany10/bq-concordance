import './Verse.css'

const Verse = props => {
    let textStr = "" + props.data.text
    return (
        <div class='verse_card'>
            {/* <p class='verse_order'>{props.order}</p> */}
            <h3 class='verse_ref'>Mark {props.data.chapter}:{props.data.verse}</h3>
            <span>
                {/* {textArr.slice(0, props.data.index).join('')} */}
                {textStr.split(/([ .,:;])+/gi).slice((props.data.index - 11), props.data.index).join('')}
                <strong class='verse_query'>{textStr.split(/([ .,:;])+/gi)[props.data.index]}</strong>
                {textStr.split(/([ .,:;])+/gi).slice(props.data.index + 1, props.data.index + 11).join('')}
            </span>
        </div>
    )
}

export default Verse