import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {
  return (
    <>
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/burgers' element={<BurgerShop />}/>
      </Routes>
      <Landing />
    </main>
    </>
  )
}

export default App