import characters from '../../data/characters.json'
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";


export default function HeroesList(){
  const [heroes, setHeroes] = useState(characters)

  return(
    <>
      <h2>Heroes</h2>
      <ul>
        {heroes.map((el) =>{
          return(
            <li key={el.id}><Link to={`/heroes/${el.id}`}>{el.name}</Link>
            </li>
          )
        })}
      </ul>
      <Outlet context={heroes}/>
    </>


  )
}