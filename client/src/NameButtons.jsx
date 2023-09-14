import useFetch from './useFetch';


// export default function NameButtons({person1, person2, setPerson1, setPerson2}) {
  export default function NameButtons( {persons, setPersons} ) {

  const {data, isLoading, error} = useFetch('http://localhost:8000/');
  
  return (
    <div>
        
        { isLoading && <div>Loading...</div> }

        { error && <div>{error}</div> }

        {data && (
          <div className="row">
              {data.map((person) => {
                return <div className="col col-lg-3 m-2">
                          <button type="button" className="btn btn-outline-success" 
                                  key={person.name} 
                                  //Need to wrap in anonymous function to prevent firing when loaded
                                  onClick ={() => { 
                                      persons.length < 2 ? setPersons(persons => [...persons, {name: person.name, url: person.url} ])
                                      //Handle error
                                      : console.log("max value reached");
                                    }
                                    }>{person.name}                            
                          </button>
                       </div>
              })}
          </div>
        )}
      
    </div>
  )
}
