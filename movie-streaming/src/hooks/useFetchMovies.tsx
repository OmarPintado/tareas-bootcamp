import { useEffect, useState } from 'react';

export const useFetchMovies = (url : string ) => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<string>();

    const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjBjMDk3ZmU2MzI3OGJhNWUzNjUzMzNkMjY0OTA4ZiIsIm5iZiI6MTcyNjYyODQ0Ny40NzQxOTYsInN1YiI6IjY2ZWE0MTM0NTE2OGE4OTZlMTFmMmQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jszdJqRxCIeUpNoebtoudDRxffO3Y8OQAa4v5PVxU5E'

    useEffect(() => {
        setLoading(true);

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${bearerToken}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results.slice(0,4));
            })
            .catch((error) => {
                console.error(error);
                setErrors(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [url]);

    return { data: movies, errors, loading };
};
