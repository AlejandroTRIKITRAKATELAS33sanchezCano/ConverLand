
import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import Login from './Pages/Login'

function App() {

  return (
    <Routes>

      //General
      <Route path='/' element={<Index/>}/>
      <Route path='/Login' element={<Login/>}/>

      //Usuario
    </Routes>
  )
}

export default App
