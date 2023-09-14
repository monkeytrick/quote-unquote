import { FaTrash } from "react-icons/fa"
import QuoteArea from "./QuoteArea"
import useFetch from "./useFetch";
import GetQuote from "./GetQuote";
import QuoteModal from "./QuoteModal";
export default function ShowSelected( {persons, setPerson } ) {  
 
// const [quote, setQuote] = useState('')

  return (
    
    <div>
        
        <div className="row">
        <QuoteArea />
        </div>
        
        <div className="row">
            { persons.map((person) => {
               return <div className="col">
                            <button key={person.name}>{person.name}<FaTrash onClick={()=> { 
                                //Also -  setPerson( persons => [persons.filter((p)=> p.name !== person.name )]     ) } }/>
                                // need to check value is not already in array - could shade out option
                                setPerson( persons.filter(p => p.name !== person.name ) ) 
                            } }/>

                            </button>
                      </div>})
             }
        </div>
        { persons.length === 2 && <QuoteModal persons={persons} /> }

        {/* Check both names added to send to fetch */}
        {/* { person1.name && person2.name ? (<div className="row">
            <GetQuote setQuote={setQuote} person1={person1} person2={person2}/>
        </div>): null}       */}
    </div>
  )
}
