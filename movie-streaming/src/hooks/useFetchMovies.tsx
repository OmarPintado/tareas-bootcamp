import { useEffect, useState } from 'react';
import {Movie} from '../interfaces/movie.interface.ts';

export const useFetchMovies = (url : string ) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errors, setErrors] = useState<string>();

    // @ts-expect-error nose
    const bearerToken:string = import.meta.env.VITE_MOVIEDB_TOKEN;

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
