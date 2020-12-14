import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Results.css';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import navData from '../../navData';

const initPage = 1;

export default function Results({ selectedNavItem, setSelectedNavItem }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(initPage);
    const [totalResultsCount, setTotalResultsCount] = useState(null);

    const fetchNextMovies = () => {
        const url = selectedNavItem.getUrl(page + 1);

        fetch(url)
            .then(respone => respone.json())
            .then(({results}) => {
                setMovies([...movies, ...results]);
                setPage(page + 1);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        if (!selectedNavItem) return;

        setPage(initPage);
        const url = selectedNavItem.getUrl();

        fetch(url)
            .then(respone => respone.json())
            .then(({results, total_results}) => {
                setTotalResultsCount(total_results);
                setMovies(results);
            })
            .catch(error => {
                setSelectedNavItem(navData[0]);
                console.error(error);
            });
    }, [selectedNavItem, setSelectedNavItem]);

    if (!movies) {
        return (
            <div>
                <h2>No results found</h2>
            </div>
        );
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

Results.propTypes = {
    selectedNavItem: PropTypes.object.isRequired,
    setSelectedNavItem: PropTypes.func.isRequired,
}