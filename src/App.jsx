import './css/App.css'
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import NavBar from './compoments/NavBar'
function App() {
  return (
    <div>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourite/>}/>

      </Routes>
    </main>
    </div>
  )
}

export default App
