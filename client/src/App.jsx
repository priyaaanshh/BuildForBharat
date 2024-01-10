import { useState } from 'react'
import './App.css'
import Header from './Container/Header'
import Footer from './Container/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
     
    </>
  )
}

export default App
