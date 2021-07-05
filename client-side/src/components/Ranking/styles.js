import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    //Fixed Tab Bar
    sortByData: {
        position: 'fixed',
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 999,
    },
    //Left Filter Side Bar
    sortByGenre: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        height: "100%",
        width: 170,
        maxWidth: 280,
        borderRight: "1px solid #dfe1e5",
        backgroundColor: theme.palette.background.paper,
        transition: 'transform .2s',
        "& nav": {
            width: '100%',
        }
    },
    leftRetracted: {
        transform: 'translateX(calc(-100% + 57px))',
        "& button": {
            transform: 'rotate(-180deg)',
        }
    },
    sortByGenreSwitch: {
        position: 'absolute',
        top: 64,
        right: 6,
        backgroundColor: theme.palette.background.paper,
        transition: 'transform .3s',
    },
    sortByGenreIcon: {
        flexDirection: "row-reverse",
    },
    //Right Filter Side Bar
    sortByTime: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        height: "100%",
        width: 170,
        maxWidth: 280,
        right: 0,
        borderLeft: "1px solid #dfe1e5",
        backgroundColor: theme.palette.background.paper,
        transition: 'transform .2s',
        "& nav": {
            width: '100%',
        }
    },
    rightRetracted: {
        transform: 'translateX(calc(100% - 57px))',
        "& button": {
            transform: 'rotate(0deg)',
        }
    },
    sortByTimeSwitch: {
        position: 'absolute',
        top: 64,
        left: 6,
        backgroundColor: theme.palette.background.paper,
        transform: 'rotate(-180deg)',
        transition: 'transform .3s',
    },
    // Ranking List
    RankingContainer: {
        width: '75vw',
        marginTop: 64,
        padding: 0,
        backgroundColor: 'transparent',
    },
    RankingCards: {
        display: 'flex',
        float: 'left',
        width: 'calc(37vw - 32px - 2px)',
        maxWidth: 606,
        margin: 16,
        border: '1px solid #dfe1e5',
        borderRadius: 8,
        boxShadow: 'none',

        "&:hover": {
            boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
        }
    },
    Rank1: {
        margin: 13,
        border: '4px solid #6030fe',
    },
    Rank2: {
        margin: 13,
        border: '4px solid #5581ff',
    },
    Rank3: {
        margin: 13,
        border: '4px solid #6fcffb',
    },
    //
    RankingDecorator: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 32,
        backgroundColor: theme.palette.background.paper,
        flexShrink: 0,

        "& p": {
            height: 'min-content',
            transform: 'translateX(-2px)',
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            flexGrow: 2,
        },
        "& div": {
            backgroundColor: theme.palette.background.paper,
            width: 8,
            height: '100%',
            borderRadius: '8px 0 0 8px',
        },
    },
    RankingDeco1: {
        backgroundColor: '#6030fe',
    },
    RankingDeco2: {
        backgroundColor: '#5581ff',
    },
    RankingDeco3: {
        backgroundColor: '#6fcffb',
    },
    //
    bookCover: {
        height: '9.6vw',
        width: '6vw',
        maxHeight: 184.31,
        maxWidth: 115.19,
        margin: 24,
        marginLeft: 16,
        borderRadius: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: 0,
    },
    bookInfo: {
    },
    bookTitle: {
        marginLeft: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',

        "&:hover": {
            textDecoration: 'underline',
        }
    },
    bookAuthor: {
        color: '#651fff',
        cursor: 'pointer',

        "&:hover": {
            textDecoration: 'underline',
        }
    },
    bookDescrip: {
        display: 'inline',
    },
}));

export default useStyles;
