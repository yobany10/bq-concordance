import './Search.css'

const Search = props => {
    return (
        <form id='search_form' autoComplete='off'>
            <input id='search_input' type='text' placeholder='search a word' onChange={props.handleInput}></input>
            <button id='search_button' type='submit' onClick={props.searchWord}>Search</button>
        </form>
    )
}

export default Search