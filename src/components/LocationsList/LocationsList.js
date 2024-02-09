import locations from '../../data/location.json'
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

export default function LocationsList(){
  const [place, setPlace] = useState(locations)

  return(
    <>
      <h2>Locations</h2>
      <ul>
        {place.map((el) =>{
          return(
            <li key={el.id}><Link to={`/locations/${el.id}`}>{el.name}</Link>
            </li>
          )
        })}
      </ul>
      <Outlet context={place}/>
    </>


  )
}