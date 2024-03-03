import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const GetData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState({});
    const [error, setError] = useState<any>("");

    const url = "http://localhost:5000/todos";
    const [data, err] = useFetch(url);
    // console.log(typeof err);
    
    useEffect(() => {
        if (data || err) {
            // setTimeout(()=>{},5000);
            setResponse(data);
            setIsLoading(false);
        }
        setError(err);
    }, [data, err]);

    return (
        <div className="contents">
            {isLoading && <div>Loading...</div>}
            {!isLoading && err && <div>Error : {JSON.stringify(error)}</div> }
            {!isLoading && data && JSON.stringify(response)}
        </div>
    );
}
 
export default GetData;
