import useFetch from "./useFetch"


export default function GetQuote( { person1, person2, setQuote } ) {
const {data:quote, isLoading:wait, error:problem} = useFetch(`http://localhost:8000/?q=challenge&p1=${person1.url}&p2=${person2.url}`);

const onClick = () => {
    setQuote(quote);
}

  return (
    <div>
        <button>Get Quote</button>      
    </div>
  )
}
