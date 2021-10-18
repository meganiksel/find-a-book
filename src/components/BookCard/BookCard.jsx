import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './styles';
import ContentLoader from 'react-content-loader';

const Placeholder = () => (
    <ContentLoader
        height={100}
        speed={1}
        backgroundColor={'#ccc'}
        foregroundColor={'#ddd'}
        viewBox="0 0 400 108">
        <rect x="0" y="24" rx="4" ry="4" width="350" height="24" />
        <rect x="0" y="64" rx="3" ry="3" width="200" height="20" />
    </ContentLoader>
);

const BookCard = ({ title, author }) => (
    <Card sx={styles.card}>
        <CardContent sx={styles.content}>
            {title ? (
                <>
                    <Typography variant="h5" component="div" sx={styles.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        Author: {author || 'unknown'}
                    </Typography>
                </>
            ) : (
                <Placeholder />
            )}
        </CardContent>
    </Card>
);

export default BookCard;
