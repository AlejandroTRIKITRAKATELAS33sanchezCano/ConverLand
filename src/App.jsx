
import { Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {

  return (
    <Routes>

      //General
      <Route path='/' element={<Index/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/registro' element={<SignUp/>}/>

      //Usuario
    </Routes>
  )
}

export default App
