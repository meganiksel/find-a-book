import React, { useContext, useRef } from 'react';
import Typography from '@mui/material/Typography';
import styles from './styles';
import Container from '@mui/material/Container';
import Search from '../Search/Search';
import useScroll from '../../hooks/useScroll';
import { BooksContext } from '../../context/BooksContext';
import BooksList from '../booksList/BooksList';
import { Box } from '@mui/system';
import { List, ListItem } from '@mui/material';
import BookCard from '../BookCard/BookCard';

const PlaceholderList = ({ styles, requestLimit }) => {
    const arr = new Array(requestLimit).fill('');
    return (
        <List sx={styles.list}>
            {arr.map((item, i) => (
                <ListItem sx={styles.listItemPlaceholder} key={i}>
                    <BookCard />
                </ListItem>
            ))}
        </List>
    );
};

const HomePage = () => {
    const { offline, loading, handleScroll, count, books, requestLimit } =
        useContext(BooksContext);
    const { container, total } = styles;

    const scrollableElRef = useRef(null);
    const triggerRef = useRef(null);

    // let one card height = 108px
    const emptyHeight = 108 * (count - books.length - requestLimit);

    useScroll(scrollableElRef, triggerRef, handleScroll);

    return (
        <Container sx={container} maxWidth="lg">
            {!offline && <Search />}
            {count > 0 && (
                <Typography variant="h5" component="h5" sx={total}>
                    Total books found: {count}
                </Typography>
            )}
            <Box ref={scrollableElRef}>
                <BooksList styles={styles} ref={triggerRef} />
                {loading && count > books.length && (
                    <PlaceholderList
                        styles={styles}
                        requestLimit={requestLimit}
                    />
                )}
                <Box sx={{ minHeight: emptyHeight }} />
            </Box>
        </Container>
    );
};

export default HomePage;
