
import {useQuery} from "react-query";
import useFetch from "./useFetch";

export default function PeopleOptions() {

  const {data, isLoading, error} = useFetch('/')

 
  return (
    console.log(data)
    <div>
        {
        data.map((person) => {
          return 
          
                <div>
                    <a href={person.url}>{person.name}</a>   
                </div>
        })
        }      
    </div>
  )
}
