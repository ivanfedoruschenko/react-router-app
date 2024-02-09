import episodes from '../../data/episode.json'
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";


export default function EpisodesList(){
  const [series, setSeries] = useState(episodes)

  return(
    <>
      <h2>Episodes</h2>
      <ul>
        {series.map((el) =>{
          return(
            <li key={el.id}><Link to={`/episodes/${el.id}`}>{el.name}</Link>
            </li>
          )
        })}
      </ul>
      <Outlet context={series}/>
    </>


  )
}