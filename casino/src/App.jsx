import './App.css'
import Home from './layouts/Home.jsx'
import Dice from './Dice.jsx'
import { Routes, Route } from 'react-router-dom'
import Slots from './Slots.jsx'
import Flip from './Flip.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dice' element={<Dice />} />
      <Route path='/slots' element={<Slots />} />
      <Route path='/flip' element={<Flip/>}/>
    </Routes>
    // <Navbar />
    // <Games />
  )
}

export default App
