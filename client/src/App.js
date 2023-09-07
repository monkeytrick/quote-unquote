// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './PeopleOptions';
import useFetch from './useFetch';
import QuoteArea from './QuoteArea';


function App() {

  const [person1, setPerson1] = useState({});
  const [person2, setPerson2] = useState({});


  //Display quote area
  const [quoteIsActive, setQuoteIsActive] = useState('false');
  // Display options
  const [optionsIsActive, setOptionsIsActive] = useState('false');
  
  const {data, isLoading, error} = useFetch('http://localhost:8000/');

  //Handle options 
  // function handler(person) {
  //   // console.log("click for " + person.name)
  //   // const max = 2;
  //   // const names = [];
  //   // if(person1 == ) {

  //   // }

  //   if(optionsIsActive == false) {
  //     setOptionsIsActive();
  //   }  
  
    // if(names.length < max) {
    //   names.push(person)
    //   console.log("request for " + person);
    //   names.push(person);
    //   //create object and push to array
    //   //Loop through to create buttons with name as key - include delete option
    //   //Or pass array to prop so can loop through to create buttons
    //   names.forEach((name) => {})
    // } else {
    //   //return error
    //   console.log("max names reached");
    // }

 //If 
    // if(names.length = 2) {
    //   //Display fetch button or set as prop with values
    // }


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


        <div>

        { isLoading && <div>Loading...</div> }

        { error && <div>{error}</div> }

        {data && (
          <div className="row">
              {data.map((person) => {
                return <div className="col col-lg-3 m-2">
                          <button type="button" className="btn btn-outline-success" 
                                  key={person.name} 
                                  //Need to wrap in anonymous function
                                  // onClick={()=>{handler(person)}}>
                                  //Could also check if useState for person is full, then add use state for two
                                  // onClick={names.length < 2 ? setNames() : console.log("Max value reached")}>
                                  onClick ={() => {
                                    const findPerson = {name: person.name,
                                                        url: person.url};
                                    Object.keys(person1).length === 0 ? setPerson1(findPerson) 
                                    : Object.keys(person2).length === 0 ? setPerson2({name: person.name, url: person.url}) 
                                    //Handle error
                                    : console.log("max value reached");

                                      console.log(person1.findPerson.name)
                                      console.log(person2)



                                    // if(Object.keys(person1).length === 0) {
                                    //   console.log("person one added")
                                    //   setPerson1({findPerson})
                                    // }
                                    // else if(Object.keys(person2).length === 0) {
                                    //   console.log("person two added")

                                    //   setPerson2({findPerson})
                                    // }
                                    // else {
                                    //   console.log("max value reached")
                                    // }




                                    }
                                      }
                                        >
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
