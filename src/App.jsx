import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Footer />
    </>
  )
}

export default App
