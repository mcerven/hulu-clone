import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Results.css';
import InfiniteScroll from "react-infinite-scroll-component";
import navData from '../../navData';
import { useParams } from 'react-router-dom';
import NotFound from '../error/NotFound';

const initialPage = 1;

export default function Results() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [totalResultsCount, setTotalResultsCount] = useState(null);

    const fetchNextMovies = () => {
        const selectedNavItem = navData.find(navItem => navItem.path === id);
        const url = selectedNavItem.getUrl(page + 1);

        fetch(url)
            .then(respone => respone.json())
            .then(({results}) => {
                setMovies([...movies, ...results]);
                setPage(p => p + 1);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        if (!id) {
            setMovies(null);
            return;
        }

        setPage(initialPage);
        
        const selectedNavItem = navData.find(navItem => navItem.path === id);
        if (!selectedNavItem) {
            setMovies(null);
            return;
        }
        
        const url = selectedNavItem.getUrl();

        fetch(url)
            .then(respone => respone.json())
            .then(({results, total_results}) => {
                setTotalResultsCount(total_results);
                setMovies(results);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (movies == null) {
        return <NotFound />
    }

    return (
        <div className="results">
            <InfiniteScroll
                dataLength={movies.length}
                next={fetchNextMovies}
                hasMore={totalResultsCount > movies.length}
                loader={<h2>Loading...</h2>}>
                <div className="results__items">
                    { movies.map(movie => 
                        <MovieCard key={movie.id} {...movie} />
                    )}
                </div>
            </InfiniteScroll>
        </div>
    );
}
