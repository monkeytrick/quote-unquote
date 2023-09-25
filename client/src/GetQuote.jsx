import { useState } from "react";

export default function QuoteModal( { persons, selected, setSelected, setQuote } ) {

    console.log("Modal rendered")

    const handleClick = () => {
      // console.log("setSelected is ", setSelected)
        const selectedPerson = persons[Math.floor(Math.random() * 2)];
        setSelected(selectedPerson)
        setQuote(true)
        console.log("Selected is ", selectedPerson)
        console.log("setState obj is " + selected.name)
    }

  return (
    <div>

               
        {/* Wrapped in anonymous function to prevent re-render */}
        <button type="button" onClick={ handleClick }className="btn btn-primary">
                Get Quote</button>
        {/* //Change to single button. Have modal rendered once */}
        {/* {selected && <QuoteModal persons={persons} selected={selected}/>} */}
        {}

           
    </div>
  )
}
