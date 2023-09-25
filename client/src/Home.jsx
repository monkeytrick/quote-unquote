import { useState } from 'react';
import './App.css';
import Header from './Header';
// import useFetch from './useFetch';
// import QuoteArea from './QuoteArea';
import SelectedButtons from './SelectedButtons';
import GetQuote from './GetQuote'
import NameButtons from './NameButtons';
import QuoteModal from './QuoteModal';

export default function Home() {
    const [persons, setPersons] = useState([]);
    const [selected, setSelected] = useState({});
    const [quote, setQuote] = useState(false)


  return (
   
    <div className="App">
      <Header />

    {/* MODAL GOES HERE */}

      {quote === true &&  <QuoteModal persons={ persons } selected={ selected }/>}

      <SelectedButtons persons={ persons } setPerson={ setPersons } />

      <GetQuote persons={ persons } selected={ selected } setSelected={ setSelected } setQuote={setQuote}/> 

      <NameButtons persons={ persons } setPersons={ setPersons } />

      
    </div>
      
  )
}
