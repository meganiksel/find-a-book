import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './styles';

const BookCard = ({ title, author }) => (
    <Card sx={styles.card}>
        <CardContent sx={styles.content}>
            <Typography variant="h5" component="div" sx={styles.title}>
                {title}
            </Typography>
            <Typography variant="body2">
                Author: {author || 'unknown'}
            </Typography>
        </CardContent>
    </Card>
);

export default BookCard;
