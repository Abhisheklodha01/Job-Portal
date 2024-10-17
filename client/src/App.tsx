import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Signup from "./modules/Signup"
import { NavBar } from './modules/NavBar'
import { Footer } from './modules/Footer'
import Login from './modules/Login'
import Home from './modules/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
