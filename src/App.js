import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import PremierLeague from "./pages/Pl"
import LaLiga from "./pages/LaLiga"


const App = () =>  {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/premierleague' element={<PremierLeague/>}/>
        <Route path='/laLiga' element={<LaLiga/>}/>
      </Routes>
    </Router>
  );
}

export default App
