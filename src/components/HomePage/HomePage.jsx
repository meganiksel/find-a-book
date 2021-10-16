import React, { forwardRef, useRef } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import styles from './styles';
import ListItem from '@mui/material/ListItem';
import BookCard from '../BookCard/BookCard';
import Container from '@mui/material/Container';
import Search from '../Search/Search';
import useScroll from '../../hooks/useScroll';

const BooksList = forwardRef(({ books }, ref) => {
  const { list, listItem } = styles;
  return (<List sx={list}>
    {books.map((book, index) => {
      const { title, author } = book;
      const lastElementRef = index === books.length - 1 ? { ref } : {};

      return <ListItem {...lastElementRef} key={`${title}-${author}-${index}`} sx={listItem} >
        <BookCard author={author} title={title} />
      </ListItem>
    })}
  </List>)
})

const HomePage = ({
    query,
    count,
    handleSearch,
    books,
    offline,
    handleScroll
}) => {
    const { container, total } = styles;

    const scrollableElRef = useRef(null);
    const triggerRef = useRef(null);

    useScroll(scrollableElRef, triggerRef, handleScroll);

    return (
        <Container sx={container} maxWidth="lg">
            {!offline && <Search query={query} handleSearch={handleSearch} />}
            {count > 0 && (
                <Typography variant="h5" component="h5" sx={total}>
                    Total books found: {count}
                </Typography>
            )}
            <div ref={scrollableElRef}>
                <BooksList ref={triggerRef} books={books}/>
            </div>
        </Container>
    );
};

export default HomePage;
