
import {useQuery} from "react-query";
import useFetch from "./useFetch";

export default function PeopleOptions() {

const {data, isLoading, error} = useFetch('http://localhost:8000/');

  return (
          <div>

            { isLoading && <div>Loading...</div> }

            { error && <div>{error}</div> }

            {data && (
              <div className="row">
              {data.map((person) => {
                return <div className="col col-lg-3 m-2">
                          <button type="button" className="btn btn-outline-success" key={person.name}>{person.name}</button>
                  </div>
              })}
              </div>
            )}
          </div>   
  );
}
