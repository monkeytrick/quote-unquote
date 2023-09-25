import { FaTrash } from "react-icons/fa"
import QuoteArea from "./QuoteArea"
import GetQuote from "./GetQuote";

export default function ShowSelected( { persons, setPerson } ) {  
 
console.log("ShowSelected rendered")


  return (
    
    <div>
        
        <div className="row">
        {/* <QuoteArea /> */}
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

        {/* { persons.length === 2 && <GetQuote persons={ persons } /> } */}

    </div>
  )
}
