import colors from '../../utils/colors';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    total: {
        marginBottom: '5rem',
        color: colors.gallery,
        alignSelf: 'center'
    },
    listItem: {
        margin: '0',
        padding: '0',
        width: '45%',
        '&:nth-of-type(2n)': {
            alignSelf: 'flex-end',
            '.MuiPaper-root': {
                backgroundColor: colors.lime,
                color: colors.darkGray
            }
        },
        '.MuiPaper-root': {
            backgroundColor: colors.blue,
            color: colors.gallery
        },
        '&:not(last-child)': {
            marginBottom: '2rem'
        }
    },
    listItemPlaceholder: {
        margin: '0',
        padding: '0',
        width: '45%',
        '&:nth-of-type(2n)': {
            alignSelf: 'flex-end',
            '.MuiPaper-root': {
                backgroundColor: '#eee',
                color: colors.darkGray
            }
        },
        '.MuiPaper-root': {
            backgroundColor: '#ddd',
            color: colors.gallery
        },
        '&:not(last-child)': {
            marginBottom: '2rem'
        }
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 4rem'
    }
};

export default styles;
