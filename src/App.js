import Home from './components/Home'
import Concordance from './components/Concordance'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css'

const App = () => {

  return (
    <div id='main_div'>
      <Router>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/concordance'><Concordance /></Route>
        <Route exact path='/concordance/:query'><Concordance /></Route>
      </Router>
    </div>
  )
}

export default App