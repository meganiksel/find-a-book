import React, { useContext, useRef } from 'react';
import Typography from '@mui/material/Typography';
import styles from './styles';
import Container from '@mui/material/Container';
import Search from '../Search/Search';
import useScroll from '../../hooks/useScroll';
import { BooksContext } from '../../context/BooksContext';
import BooksList from '../booksList/BooksList';

const HomePage = () => {
    const { offline, handleScroll, count } = useContext(BooksContext);
    const { container, total } = styles;

    const scrollableElRef = useRef(null);
    const triggerRef = useRef(null);

    useScroll(scrollableElRef, triggerRef, handleScroll);

    return (
        <Container sx={container} maxWidth="lg">
            {!offline && <Search />}
            {count > 0 && (
                <Typography variant="h5" component="h5" sx={total}>
                    Total books found: {count}
                </Typography>
            )}
            <div ref={scrollableElRef}>
                <BooksList ref={triggerRef} />
            </div>
        </Container>
    );
};

export default HomePage;
