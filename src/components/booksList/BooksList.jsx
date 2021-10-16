import React, { forwardRef, useContext } from 'react';
import { List, ListItem } from '@mui/material';
import { BooksContext } from '../../context/BooksContext';
import BookCard from '../BookCard/BookCard';
import styles from './styles';

const BooksList = forwardRef((props, ref) => {
    const { books } = useContext(BooksContext);
    const { list, listItem } = styles;
    return (
        <List sx={list}>
            {books.map((book, index) => {
                const { title, author } = book;
                const lastElementRef =
                    index === books.length - 1 ? { ref } : {};

                return (
                    <ListItem
                        {...lastElementRef}
                        key={`${title}-${author}-${index}`}
                        sx={listItem}>
                        <BookCard author={author} title={title} />
                    </ListItem>
                );
            })}
        </List>
    );
});

export default BooksList;
