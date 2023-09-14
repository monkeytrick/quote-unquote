import useFetch from "./useFetch";

export default function QuoteModal({persons}) {
    const selectedPerson = persons[Math.floor(Math.random() * 2)];
    const urlAppend = selectedPerson.url;

    const { data:quote, isLoading, error } = useFetch(`http://localhost:8000/?q=challenge&p=${urlAppend}`);



  return (
    <div>
        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Get Quote
</button>


{/* // If data loaded, else... */}
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {quote}
      </div>
      <div className="modal-footer">

        { 
           persons.map(person => { return <button type="button" className="btn btn-primary">{ person.name} </button> })
        }

      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
