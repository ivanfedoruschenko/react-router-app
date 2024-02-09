import {useOutletContext, useParams} from "react-router-dom";

export default function Episode(){
  const series = useOutletContext()
  const {id} = useParams()
  return(
    <div>
      <h3>{series[id - 1].name}</h3>
      <p>{series[id - 1].air_date}</p>
      <p>{series[id - 1].episode}</p>
      <p>{series[id - 1].created}</p>
    </div>
  )
}