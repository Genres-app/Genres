import { blue } from '@material-ui/core/colors';
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
    },
    sideTabsWithIconL: {
        height: 48,
        minHeight: 0,
        width: 170,
        paddingTop: 12,
        paddingRight: 16,
        paddingLeft: 16,
    },
    sideTabsLeft: {
        display: "block",
        textAlign: "left",
        "& svg": {
            float: "right",
        }
    },
    leftRetracted: {
        transform: 'translateX(calc(-100% + 57px))',
        "& > button": {
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
    },
    rightTabIndicator: {
        right: "auto",
        left: 0,
    },
    sideTabsWithIconR: {
        height: 48,
        minHeight: 0,
        width: 170,
        paddingTop: 6,
        paddingRight: 16,
        paddingLeft: 56,
    },
    sideTabsRight: {
        position: 'relative',
        display: "block",
        textAlign: "left",
        "& svg": {
            position: "absolute",
            left: -40,
        }
    },
    rightRetracted: {
        transform: 'translateX(calc(100% - 57px))',
        "& > button": {
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
        minWidth: 492,
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
        minHeight: 136,
        minWidth: 85,
        margin: 24,
        marginLeft: 16,
        borderRadius: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: 0,
    },
    bookInfo: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
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
    chipContainer: {
        marginTop: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
        "&:first-child": {
            marginLeft: 0,
        }
    },
    bookData: {
        display: "flex",
        flexDirection: "column-reverse",
        marginTop: theme.spacing(2),
        fontFamily: theme.typography.fontFamily,
        fontWeight: 500,
        // alignItems: "end",
        flexGrow: 1,

        "& > div": {
            display: "flex",
            justifyContent: "center",
            maxHeight: 40,
            width: "100%",
            flexGrow: 1,
        },

        "& > div > div": {
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        "& > div > div:not(:last-child)": {
            marginRight: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5),
            borderRight: "1px solid #dfe1e5",
        },
        
        "& svg": {
            marginRight: theme.spacing(1),
        },
        "& p": {
            margin: 0,
            marginTop: 4,
        },
    },
}));

export default useStyles;