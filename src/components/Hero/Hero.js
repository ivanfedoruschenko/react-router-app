import {useOutletContext, useParams} from "react-router-dom";
import './hero.css'

export default function Episode(){
  const heroes = useOutletContext()
  const {id} = useParams()
  return(
    <div className='hero'>
      <img src={heroes[id - 1].image} alt="Аватар"/>
    <div>
      <h3>{heroes[id - 1].name}</h3>
      <p>{heroes[id - 1].status}</p>
      <p>{heroes[id - 1].species}</p>
      <p>{heroes[id - 1].type}</p>
      <p>{heroes[id - 1].created}</p>
      <p>{heroes[id - 1].gender}</p>
    </div>
    </div>
  )
}