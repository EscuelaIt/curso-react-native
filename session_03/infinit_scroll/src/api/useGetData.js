import { useEffect, useState } from 'react';
const API_URL = 'https://rickandmortyapi.com/api/';
export const useGetData = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    /* Si el endpoint ya no es "character", porque alcanzamos el final de la lista y se actualizó endpoint con el valor de "info.next", este será una url completa con esta forma: https://rickandmortyapi.com/api/character?page=2, en ese caso, solo deseamos quedarnos con esta y no concatenarla a la variable API_URL, porque tendríamos algo así https://rickandmortyapi.com/api/https://rickandmortyapi.com/api/character?page=2 */

    const fullUrl = endpoint.startsWith("http") ? endpoint : API_URL + endpoint;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            try {
                const res = await fetch(fullUrl, { signal });
                if (!res.ok) {
                    throw new Error("Network response not ok");
                }
                const data = await res.json();

                setData(prev => {
                    /*si existe el param prev significa que el estado ya contenía info, en cuyo caso, queremos un objeto que cumpla con la forma de la respuesta que envía la API: {info: {Aquí hay metadatos}, results: [{un personaje}, {otro personaje}, {y así}]}
                    por ello lo construimos con la respuesta nueva, pero luego sobrescribimos los resultados para que contengan los datos previos más los nuevos*/
                    if (prev && typeof prev === 'object' && 'results' in prev && typeof data === 'object' && 'results' in data) {
                        return { ...data, results: [...prev.results, ...data.results] };
                    };
                    return data;
                });
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, [endpoint]);
    return { data, isLoading, error };
};