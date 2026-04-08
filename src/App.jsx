import { useState } from 'react'
import Search from './components/search'
import Highlight from './components/Highlight'
import History from './components/History'
import Navbar from './layouts/Navbar'
import NewUpdate from './components/NewUpdate'
import Header from './layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-4 pb-24 px-1 py-5'>
      <Header />
      <Highlight />
      <Search />
      <History />
      <NewUpdate/>
      <Navbar />
    </div>
  )
}

export default App
