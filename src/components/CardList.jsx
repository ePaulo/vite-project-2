import Card from './Card.jsx'
import './CardList.css'

export default function CardList({ peopleInfo }) {
  const cardElements = peopleInfo.map(personInfo => (
    <Card key={personInfo.id} personInfo={personInfo} />
  ))
  return <div className="card-list">{cardElements}</div>
}
