const Verse = props => {
    let textArr = "" + props.data.array
    textArr = textArr.split('')
    return (
        <div>
            <h3>Mark {props.data.chapter}:{props.data.verse}</h3>
            <span>
                {textArr.slice(0, props.data.index).join('')}
                {/* {props.data.array} */}
            </span>
        </div>
    )
}

export default Verse