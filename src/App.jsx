import { useState } from 'react'
import { celebritiesData } from './data/data.jsx'
import CardForm from './components/CardForm.jsx'
import CardList from './components/CardList.jsx'
import './App.css'

function App() {
  const [celebritiesInfo, setCelebritiesInfo] = useState(celebritiesData)
  console.log(celebritiesInfo)
  return (
    <div className="app">
      <CardForm addCard={setCelebritiesInfo} />
      <CardList peopleInfo={celebritiesInfo} />
    </div>
  )
}

export default App
