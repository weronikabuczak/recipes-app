import {useCallback, useState} from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const sendRequest = useCallback(async (config, returnData) => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const res = await fetch(config.url, {
                method: config.method ? config.method : 'GET',
                headers: config.headers ? config.headers : {},
                body: config.body ? JSON.stringify(config.body) : null
            });
            if (!res.ok) {
                const data = await res.json();
                if (data.error.message && (!data.error.message.includes('WEAK_PASSWORD'))) {
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
    }, []);
    return {
        isLoading, errorMessage, sendRequest
    }
}

export default useHttp;