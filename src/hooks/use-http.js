import {useState} from "react";

const useHttp = (config, returnData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const sendRequest = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            console.log(config)
            const res = await fetch(config.url, {
                method: config.method,
                headers: config.headers ? config.headers : {},
                body: config.body ? JSON.stringify(config.body) : null
            });
            if (!res.ok) {
                const data = await res.json();
                // return res.json().then(data => {
                if (data.error.message) {
                    throw new Error(data.error.message);
                } else {
                    throw new Error('Unknown error.')
                }
            }
            const data = await res.json();
            returnData(data);
        } catch (error) {
            setErrorMessage(error.message);
        }
        setIsLoading(false);
    }
    return {
        isLoading, errorMessage, sendRequest
    }
}

export default useHttp;