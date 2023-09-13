import { useState } from 'react';
import './App.css';
import Header from './Header';
import useFetch from './useFetch';
import QuoteArea from './QuoteArea';
import ShowSelected from './ShowSelected';
import NameButtons from './NameButtons';


function App() {

  const [persons, setPersons] = useState([])

  // const [person1, setPerson1] = useState({});
  // const [person2, setPerson2] = useState({});

  // const {data:quote, isLoading:wait, error:problem} = useFetch(`http://localhost:8000/?q=challenge&${person1.url}&${person2.url}`);
 

  return (
    <div className="App">
      <Header />
      {/* create a useState for below. Pass this through prop. Set as condition to display once useState is set. */}
      {/* <QuoteArea /> */}

      {/* <ShowSelected person1={ person1 } person2={ person2 } setPerson1= { setPerson1 } setPerson2={ setPerson2 } /> */}
      <ShowSelected persons={ persons } setPerson={ setPersons } />

      {/* <NameButtons person1={ person1 } person2={ person2 } setPerson1= { setPerson1 } setPerson2={ setPerson2 } /> */}
      <NameButtons persons={ persons } setPersons={setPersons} />

    </div>
  );
}

export default App;
