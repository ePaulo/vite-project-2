import './Card.css'

export default function ({ personInfo }) {
  const { name, job, country, age, netWorth } = personInfo

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        <b>Job:</b> {job}
      </p>
      <p>
        <b>Country:</b> {country}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>
        <b>Net Worth:</b> {netWorth}M
      </p>
    </div>
  )
}
