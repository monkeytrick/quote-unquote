// import { useState } from 'react';
import useFetch from './useFetch';


export default function NameButtons({person1, person2, setPerson1, setPerson2}) {
    // const [person1, setPerson1] = useState({});
    // const [person2, setPerson2] = useState({});
    console.log(person1)
  
    const {data, isLoading, error} = useFetch('http://localhost:8000/');
  return (
    <div>
        
        {/* Extract below to own component, with URL call */}
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
                                    
                                        Object.keys(person1).length === 0 ? setPerson1({name: person.name, url: person.url}) 
                                      : Object.keys(person2).length === 0 ? setPerson2({name: person.name, url: person.url}) 
                                      //Handle error
                                      : console.log("max value reached");
                                      console.log("person is " + person1)

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
