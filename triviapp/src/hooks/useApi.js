import { useState, useEffect } from 'react';
import { formatTrivia } from '../app/utils/formatTrivia';
const API_URL = "https://opentdb.com/api.php?amount=5";


export default function useApi() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const refreshData = () => {
        setIsLoading(true);
        setRefreshTrigger(prev => prev + 1);
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            setError(null);
            try {
                const res = await fetch(API_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    signal
                });
                if (!res.ok) {
                    throw new Error('HTTP Error. Not in 200 range');
                }
                const json = await res.json();
                const readyData = formatTrivia(json.results);
                setData(readyData);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.error("Aborted. No error.");
                    return;
                }
                setError({ status: error.status, statusText: error.message });
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [refreshTrigger]);
    return { data, isLoading, error, refreshData };
}
