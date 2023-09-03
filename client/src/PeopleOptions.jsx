
import {useQuery} from "react-query";
import useFetch from "./useFetch";

export default function PeopleOptions() {

const {data, isLoading, error} = useFetch('http://localhost:8000/');

 console.log("data is " + data);
  return (
    <div>
        {data.map((person) => {
          return <div>
            <button type="button">{person.name}</button>
          </div>
        })}
    </div>
    
    
  );
}
