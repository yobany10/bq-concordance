import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div id='home_div'>
            <h1 id='logo_title' className='tracking-in-expand'>BQ CONCORDANCE™</h1>
            <Link to='/concordance' id='intro_btn'><button className='primary_btn'>GO</button></Link>
        </div>
    )
}

export default Home