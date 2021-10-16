import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import styles from './styles';
import { BooksContext } from '../../context/BooksContext';

const Search = () => {
    const { query, handleSearch } = useContext(BooksContext);
    return (
        <TextField
            sx={styles}
            size="large"
            id="find-a-book"
            label="Type title of the book"
            variant="outlined"
            value={query}
            onChange={handleSearch}
        />
    );
};

export default Search;
