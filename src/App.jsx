import './css/App.css'
import Home from './pages/Home'
import Todo from './compoments/Todo'
import { Routes,Route } from 'react-router-dom'
import NavBar from './compoments/NavBar';
import { TodosProvider } from './contexts/TodosContext';
function App() {
  return (
    <TodosProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Todo/>
    </main>
    </TodosProvider>
  )
}

export default App
