import {useOutletContext, useParams} from "react-router-dom";

export default function Location(){
  const place = useOutletContext()
  const {id} = useParams()
  return(
    <div>
      <h3>{place[id - 1].name}</h3>
      <p>{place[id - 1].type}</p>
      <p>{place[id - 1].dimension}</p>
      <p>{place[id - 1].created}</p>
    </div>
  )
}