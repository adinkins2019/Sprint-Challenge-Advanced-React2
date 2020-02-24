import axios from 'axios'
import {useState, useEffect} from 'react'

const useFetch = (api, options) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(api, options)
            .then(response => setData(response.data))
            .catch(err => console.log("Error: ", err))
    })

    return data;
}

export default useFetch;