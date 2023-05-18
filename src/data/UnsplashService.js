import {useEffect, useState} from "react";
import axios from "axios";

/**
 * Connects to the Unsplash endpoint and retrieves an object containing
 * a page of response from that server.
 *
 */
const UnsplashService = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    axios.defaults.baseURL = 'https://api.unsplash.com'

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url);
            setResponse(res.data.results);
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param);

    }, [param])

    return {
        response,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default UnsplashService