import axios from 'axios'
import {useState, useEffect} from 'react'

const useFetch = (api) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(api)
            .then(response => setData(response.data))
            .catch(err => console.log("Error: ", err))
    }, [data])

    return data;
}

export default useFetch;