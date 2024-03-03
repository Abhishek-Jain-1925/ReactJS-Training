import axios from "axios";
import { useEffect, useState } from "react";


export const useFetch = (url:string) => {

    const [response, setResponse] = useState([]);
    const [error,setError] = useState([]);

    useEffect(()=>{
        axios
        .get( url )
        .then((response) => {
            const data = response.data;
            setResponse(data);
        })
        .catch((err)=> {
            setError(err.message);
        });
    }, []);

  return [response, error];
};

