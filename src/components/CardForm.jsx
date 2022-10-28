import { useState } from 'react'
import './CardForm.css'

export default function CardForm({ addCard }) {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [country, setCountry] = useState('')
  const [age, setAge] = useState('')
  const [netWorth, setNetWorth] = useState('')
  const [missingValues, setMissingValues] = useState([])

  const handleFormSubmit = e => {
    e.preventDefault()
    if (!name) setMissingValues(['name'])
    if (!job) setMissingValues(values => [...values, 'job'])
    if (!country) setMissingValues(values => [...values, 'country'])
    if (!age) setMissingValues(values => [...values, 'age'])
    if (!netWorth) setMissingValues(values => [...values, 'net worth'])

    if (name && job && country && age && netWorth) {
      addCard(cards => [
        ...cards,
        {
          id: cards.length + 1,
          name: name,
          job: job,
          country: country,
          age: age,
          netWorth: netWorth,
        },
      ])

      setName('')
      setJob('')
      setCountry('')
      setAge('')
      setNetWorth('')
      setMissingValues([])
    }
  }

  const formElement = (
    <form className="card-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Full Name (eg Joe Black)"
      />
      <input
        type="text"
        name="job"
        value={job}
        onChange={e => setJob(e.target.value)}
        placeholder="Career Title (eg Actor)"
      />
      <input
        type="text"
        name="country"
        value={country}
        onChange={e => setCountry(e.target.value)}
        placeholder="Country (home)"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="Age (years)"
      />
      <input
        type="number"
        name="netWorth"
        value={netWorth}
        onChange={e => setNetWorth(e.target.value)}
        placeholder="Net Worth (millions)"
      />
      <input className="button" type="submit" value="Add User" />

      {missingValues.map((missingValue, index) => (
        <p className="missing-values" key={index}>
          Please insert a {missingValue} value
        </p>
      ))}
    </form>
  )

  return formElement
}
