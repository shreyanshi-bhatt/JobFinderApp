import { useState, useEffect } from "react";
import axios from "axios";


const rapidApiKey = process.env['RAPID_API_KEY'];

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': "7174ab8dbcmsh9e5075ea839535ap1a8c8bjsnfdb16bdeaf99",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
        
            setData(response.data.data);
            setIsLoading(false);
          } catch (error) {
            setError(error);
            console.log(error)
            alert('There is an error')
          } finally {
            setIsLoading(false);
          }
    };

    useEffect(() => {
        fetchData();
      }, []);
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
    
      return { data, isLoading, error, refetch };

};


export default useFetch;