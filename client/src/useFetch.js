import { useState, useEffect } from "react";

//Custom hooks must begin with 'use..'
const useFetch = (url) => {
        // Example of useState. Used for variables that will change. 'blogs' is the reference for the initial data, which is 
    // set as null (empty)in the useState method. Calling setBlogs and passing new data to this / setBlogs(newdata) \ will update this.
    const [data, setData] = useState(null);

    // 'Loading...' Message. Set to true as blogs will be loading as page first renders
    const [isLoading, setLoaded] = useState(true);

    const[error, setError] = useState(null);

    useEffect(()=> {
        console.log('url called')

        fetch(url, {mode: 'cors'})
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not retrieve data ' + res.statusText);
                }
              return res.json();
            })
            .then(data => {
                setData(data)
                //Remove loading message
                setLoaded(false)
                setError(null)
                // console.log(data)
            })
            .catch(err=> {
                console.log(err.message)
                setLoaded(false)
                setError(err.message)
            })
        },[url])

    return({data, isLoading, error})
}


export default useFetch;