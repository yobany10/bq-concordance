// import { Link } from 'react-router-dom'
import './Search.css'

const Search = props => {
    return (
        <form id='search_form' autoComplete='off'>
            <input id='search_input' type='text' placeholder='search a word' onChange={props.handleInput}></input>
            {/* <Link to={`/concordance/${props.query}`} id='search_button_link'> */}
                {/* <button id='search_button' type='submit'>SEARCH</button> */}
            {/* </Link> */}
        </form>
    )
}

export default Search