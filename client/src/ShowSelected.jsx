import { FaTrash } from "react-icons/fa"
import QuoteArea from "./QuoteArea"
import useFetch from "./useFetch";
import { useState } from "react";
import GetQuote from "./GetQuote";
export default function ShowSelected( {person1, person2, setPerson1, setPerson2} ) {  

// const [data:QuoteArea, isLoading, error] = useFetch()
const clickHandler = () => {
const url = `http://localhost:8000/?q=challenge&p1=${person1.url}&p2=${person2.url}`;
}
const [quote, setQuote] = useState('')

  return (
    <div>
        <div className="row">
        <QuoteArea />
        </div>
        <div className="row">
            {/* Could re-factor by looping through params to produce elements */}
            <div className="col">
                <button>{person1.name}<FaTrash onClick={()=> { setPerson1({}) } }/></button>
            </div>
            <div className="col">
                <button>{person2.name}<FaTrash onClick={()=>{ setPerson2({}) } }/></button>
            </div>
        </div>

        {/* Check both names added to send to fetch */}
        { person1.name && person2.name ? (<div className="row">
            <GetQuote setQuote={setQuote} person1={person1} person2={person2}/>
        </div>): null}      
    </div>
  )
}
