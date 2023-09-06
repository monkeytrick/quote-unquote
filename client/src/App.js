// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './PeopleOptions';
import useFetch from './useFetch';
import QuoteArea from './QuoteArea';


function App() {
  // Change to useState later
  const names = [];

  //Display quote area
  const [quoteIsActive, setQuoteIsActive] = useState('false');
  // Display options
  const [optionsIsActive, setOptionsIsActive] = useState('false');
  
  const {data, isLoading, error} = useFetch('http://localhost:8000/');

  //Handle options 
  function handler(person) {
    console.log("click for " + person.name)
    const max = 2;
    const names = [];

    if(optionsIsActive == false) {
      setOptionsIsActive();
    }  
  
    if(names.length < max) {
      console.log("request for " + person);
      names.push(person);
      //create object and push to array
      //Loop through to create buttons with name as key - include delete option
      //Or pass array to prop so can loop through to create buttons
      names.forEach((name) => {})
    } else {
      //return error
      console.log("max names reached");
    }

 //If 
    if(names.length = 2) {
      //Display fetch button or set as prop with values
    }


  }
  //Fetch button request for quote
  function quoteRequest () {
    const url = "http://localhost:8000/";
    console.log("max num names reached");
    names.forEach((name) => {})
  }

  

  return (
    <div className="App">
      <Header />
      <QuoteArea />

      {/* Pass props to display - set other fields as not active-pass in state and function  */}
      {/* {quoteIsActive && <QuoteArea />}   */}

        <div>

        { isLoading && <div>Loading...</div> }

        { error && <div>{error}</div> }

        {data && (
          <div className="row">
              {data.map((person) => {
                return <div className="col col-lg-3 m-2">
                          <button type="button" className="btn btn-outline-success" 
                                  key={person.name} 
                                  onClick={handler(person)}>
                                  {person.name}                            
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
