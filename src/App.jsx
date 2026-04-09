import { useState } from 'react'
import Search from './components/search'
import Highlight from './components/Highlight'
import History from './components/History'
import Navbar from './layouts/Navbar'
import NewUpdate from './components/NewUpdate'
import Header from './layouts/Header'
import TopList from './components/TopList'
import MainMenu from './pages/MainMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainMenu/>
  )
}

export default App
