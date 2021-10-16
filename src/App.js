import React, { useState } from 'react';
import useBookSearch from './hooks/useBookSearch';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import HomePage from './components/HomePage/HomePage';
import { checkForOfflineMode, setOfflineMode } from './utils/utils';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { BooksContext } from './context/BooksContext';

export default function App() {
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [offline, setOffline] = useState(checkForOfflineMode);

    const { books, hasMore, loading, count, error } = useBookSearch(
        query,
        pageNumber,
        offline
    );

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPageNumber(1);
    };

    const handleChange = () => {
        setOfflineMode(!offline);
        setOffline(!offline);
        setQuery('');
    };

    const handleScroll = () => {
        setPageNumber(Math.floor(books.length / 10) + 1);
    };

    const context = {
        books,
        hasMore,
        loading,
        count,
        error,
        query,
        offline,
        handleSearch,
        handleScroll,
        handleChange
    };

    return (
        <ThemeProvider theme={theme}>
            <BooksContext.Provider value={context}>
                <CssBaseline />
                <Header />
                {error && <ErrorMessage />}
                <HomePage />
                {loading && <Loading />}
            </BooksContext.Provider>
        </ThemeProvider>
    );
}
