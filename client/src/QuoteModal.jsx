import useFetch from "./useFetch"

export default function QuoteModal( { persons, selected } ) {
    console.log("QUOTE FUNCTION")

    const urlAppend = selected.url;
    console.log("URL IS", `http://localhost:8000/?q=challenge&p=${urlAppend}`)
    const { data:quote, isLoading, error } = useFetch(`http://localhost:8000/?q=challenge&p=${urlAppend}`);
    console.log(quote)
    
  return (
    <div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* {quote} */}
                </div>
                <div className="modal-footer">

                    { 
                    persons.map(person => { return <button key={persons.name } type="button" className="btn btn-primary">{ person.name} </button> })
                    }

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
