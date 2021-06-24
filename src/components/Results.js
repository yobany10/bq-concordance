import Verse from './Verse'

const Results = props => {
    return (
        <div>
            {props.results.map((element, index) => <Verse data={element} input={props.input} key={index + 1} />)}
        </div>
    )
}

export default Results