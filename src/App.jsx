import { useState } from 'react'
import { celebritiesData } from './data/data.jsx'
import CardForm from './components/CardForm.jsx'
import CardList from './components/CardList.jsx'
import './App.css'

function App() {
  const [celebritiesInfo, setCelebritiesInfo] = useState(celebritiesData)
  const [formInfo, setFormInfo] = useState({})

  return (
    <div className="app">
      <CardForm />
      <CardList peopleInfo={celebritiesInfo} />
    </div>
  )
}

export default App
