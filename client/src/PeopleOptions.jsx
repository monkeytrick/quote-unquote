
import {useQuery} from "react-query";

export default function PeopleOptions() {

  const fetchPersons = fetch("/");
  const { data, status } = useQuery('persons', fetchPersons)
  
  return (
    <div>
      
    </div>
  )
}
