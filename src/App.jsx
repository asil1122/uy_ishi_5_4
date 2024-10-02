import React from 'react'
import { Home } from './pages/home'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
