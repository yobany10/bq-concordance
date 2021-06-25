import Verse from './Verse'
import './Results.css'

const Results = props => {
    return (
        <div id="results_container">
            {props.results.map((element, index) => <Verse data={element} order={index + 1} input={props.input} key={index + 1} />)}
        </div>
    )
}

export default Results