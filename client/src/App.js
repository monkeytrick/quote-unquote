import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './PeopleOptions';
import useFetch from './useFetch';
import QuoteArea from './QuoteArea';
import ShowSelected from './ShowSelected';


function App() {

  const [person1, setPerson1] = useState({});
  const [person2, setPerson2] = useState({});


  //Display quote area
  const [quoteIsActive, setQuoteIsActive] = useState('false');
  // Display options
  const [optionsIsActive, setOptionsIsActive] = useState('false');
  
  const {data, isLoading, error} = useFetch('http://localhost:8000/');


  // }
  //Fetch button request for quote
  // function quoteRequest () {
  //   const url = "http://localhost:8000/";
  //   console.log("max num names reached");
  //   names.forEach((name) => {})
  // }

  

  return (
    <div className="App">
      <Header />
      <QuoteArea />

      {/* if person one or two status set, display button area */}

      {/* { person1 || person2 (<ShowSelected person1={{person1}} person2={{person2}}/>) } */}

      <ShowSelected person1={ person1 } person2={ person2 } setPerson1= { setPerson1 } setPerson2={ setPerson2 }/>
      

      {/* If both are set, display button for search - pass urls as props */}


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
                                        Object.keys(person1).length === 0 ? setPerson1({name: person.name, url: person.url}) 
                                      : Object.keys(person2).length === 0 ? setPerson2({name: person.name, url: person.url}) 
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

    </div>
  );
}

export default App;
