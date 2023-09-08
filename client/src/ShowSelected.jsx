import { FaTrash } from "react-icons/fa"
export default function ShowSelected( {person1, person2, setPerson1, setPerson2} ) {  

  return (
    <div>
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
            <button>Get Quote</button>
        </div>):null}
        
    </div>
  )
}
