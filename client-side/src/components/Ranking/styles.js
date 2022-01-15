import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import hexToRgb from '../../utilities/HexToRgb';
import RgbaInterpolate from '../../utilities/RgbaInterpolate';

const useStyles = makeStyles((theme) => ({
  //Fixed Tab Bar
  sortByData: {
    position: 'fixed',
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    zIndex: 999,
  },
  tabPanel: {
    "& > div": {
      padding: 0,
    }
  },

  //Left Filter Side Bar
  sortByGenreTitle: {
    position: 'fixed',
    top: 'calc(64px + 50vh)',
    left: 56,
    transform: 'rotate(90deg) translateX(-50%) translateY(-100%)',
    transformOrigin: '0 0',

    "& span": {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    }
  },
  sortByGenre: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    height: "100%",
    width: 170,
    maxWidth: 280,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    transition: 'transform .2s',
  },
  sortByGenreLight: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
  sortByGenreDark: {
    borderRight: "1px solid rgba(255, 255, 255, 0.12)",
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
    right: 4,
    transition: 'transform .3s',
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.04)",
    }
  },

  indicator: {
    backgroundColor: "#fff",
  },

  //Right Filter Side Bar
  sortByTimeTitle: {
    position: 'fixed',
    top: 'calc(64px + 50vh)',
    right: 56,
    transform: 'rotate(90deg) translateX(50%)',
    transformOrigin: 'top right',

    "& span": {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    }
  },
  sortByTime: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    height: "100%",
    width: 170,
    maxWidth: 280,
    right: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    transition: 'transform .2s',
  },
  sortByTimeLight: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
  },
  sortByTimeDark: {
    borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
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
    left: 4,
    transform: 'rotate(-180deg)',
    transition: 'transform .3s',
    color: '#fff',
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.04)",
    }
  },
  // Ranking List
  RankingContainer: {
    maxWidth: 'none',
    padding: 0,
    paddingTop: 64,
    backgroundColor: 'transparent',
    width: 1884, // 3 in a row
    "@media (max-width: 2253px)": { // 2 in a row
      width: 1256,
    },
    "@media (max-width: 1625px)": { // 1 in a row
      width: 628,
    },
  },
  RankingCards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    float: 'left',
    // height: 250,
    width: 596,
    height: 'calc(258px + 2rem)',
    // maxWidth: 606,
    // minWidth: 492,
    margin: 16,
    // border: '1px solid #dfe1e5',
    borderRadius: 8,
    // boxShadow: 'none',
    // 3c4043
    backgroundColor: theme.palette.primary.main,
    borderWidth: 0,

    "&:hover": {
      boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    }
  },
  Rank1: {
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
  },
  Rank1Dark: {
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main},${theme.palette.primary.main})`,
  },
  Rank2: {
  },
  Rank2Dark: {
  },
  Rank3: {
    backgroundColor: RgbaInterpolate(
      hexToRgb(theme.palette.primary.main).r,
      hexToRgb(theme.palette.primary.main).g,
      hexToRgb(theme.palette.primary.main).b,
      1, .7, 
      hexToRgb("#8c8a97").r, 
      hexToRgb("#8c8a97").g,
      hexToRgb("#8c8a97").b,
      1, true),
  },
  Rank3Dark: {
    backgroundColor: RgbaInterpolate(
      hexToRgb(theme.palette.primary.main).r,
      hexToRgb(theme.palette.primary.main).g,
      hexToRgb(theme.palette.primary.main).b,
      1, .7, 
      hexToRgb("#9e9caa").r, 
      hexToRgb("#9e9caa").g,
      hexToRgb("#9e9caa").b,
      1, true),
  },
  RankOthers: {
    backgroundColor: "#616066",
  },
  RankOthersDark: {
    backgroundColor: "#afaeb7",
  },

  // RankingNumberDecoration
  RankingDecorator: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 48,
    height: '100%',
    flexShrink: 0,
    overflow: 'hidden',
  },
  // RankingNumber for 1,2,3
  RankingNameHash: {
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    color: theme.palette.background.paper,
    position: 'absolute',
    transform: 'translateY(-1rem) translateX(-.1rem)',
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  RankingNum: {
    height: 'min-content',
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    transform: 'translateX(.75rem)',
    textAlign: 'center',
    color: theme.palette.background.paper,
    fontSize: '4rem',
    fontWeight: 500,
    flexGrow: 2,
  },
  RankingNum2: {
    transform: 'translateX(.5rem)',
    fontSize: '3.3rem',
  },
  RankingNum3: {
    transform: 'translateX(.25rem)',
    fontSize: '2.7rem',
  },
  // RankingNumber for 4+
  RankingNameHashOthers: {
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    color: theme.palette.background.paper,
    position: 'absolute',
    transform: 'translateY(-1.25rem) translateX(.25rem)',
    fontSize: '1rem',
    fontWeight: 500,
  },
  RankingNumOthers: {
    height: 'min-content',
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    // transform: 'translateX(.5rem)',
    textAlign: 'center',
    color: theme.palette.background.paper,
    fontSize: '2rem',
    fontWeight: 500,
    flexGrow: 2,
  },
  //
  RankingCardsInner: {
    display: 'flex',
    overflow: 'hidden',
    flexGrow: 1,
    marginRight: 4,
    borderRadius: 5,
    backgroundColor: theme.palette.background.paper,
  },
  //
  bookCover: {
    height: 250,
    width: 156.2,
    // maxHeight: 184.31,
    // maxWidth: 115.19,
    // minHeight: 136,
    // minWidth: 85,
    margin: '1rem',
    // marginLeft: 16,
    borderRadius: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexShrink: 0,
  },
  bookInfo: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: 'calc(250px + 2rem)',
    paddingTop: theme.spacing(1),
    paddingBottom: `${theme.spacing(2)}px !important`,
    paddingLeft: 0,
  },
  bookTitle: {
    marginLeft: 0,
    marginTop: theme.spacing(1),
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 600,
    cursor: 'pointer',
    lineHeight: '100%',

    "&:hover": {
      textDecoration: 'underline',
    }
  },
  bookAuthor: {
    cursor: 'pointer',

    "&:hover": {
      textDecoration: 'underline',
    }
  },
  showAllAuthorsBtn: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  chipContainer: {
    marginTop: theme.spacing(1),
    display: 'flex',
  },
  chip: {
    margin: theme.spacing(0.5),
    "&:first-child": {
      marginLeft: 0,
    }
  },
  synopsis: {
    marginTop: theme.spacing(1),
    fontSize: '0.875rem',
    // fontFamily: "Roboto",
    // fontWeight: '400',
    overflow: 'hidden',
    // textOverflow: 'ellipsis',
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
  },
  bookData: {
    display: "flex",
    flexDirection: "column-reverse",
    marginTop: theme.spacing(1),
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
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
    },

    "& svg": {
      marginRight: theme.spacing(1),
    },
    "& p": {
      margin: 0,
      marginTop: 4,
    },
  },
  bookDataLight: {
    color: "#616066",
    "& > div > div:not(:last-child)": {
      borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    },
  },
  bookDataDark: {
    color: "#afaeb7",
    "& > div > div:not(:last-child)": {
      borderRight: "1px solid rgba(255, 255, 255, 0.12)",
    },
  },
  bookDataRank1: {
    color: theme.palette.primary.main
  },
  bookDataRank1_Dark: {
    color: theme.palette.primary.main
  },
  bookDataRank2: {
    color: theme.palette.primary.main
  },
  bookDataRank2_Dark: {
    color: theme.palette.primary.main
  },
  bookDataRank3: {
    color: RgbaInterpolate(
      hexToRgb(theme.palette.primary.main).r,
      hexToRgb(theme.palette.primary.main).g,
      hexToRgb(theme.palette.primary.main).b,
      1, .7, 
      hexToRgb("#8c8a97").r, 
      hexToRgb("#8c8a97").g,
      hexToRgb("#8c8a97").b,
      1, true)
  },
  bookDataRank3_Dark: {
    color: RgbaInterpolate(
      hexToRgb(theme.palette.primary.main).r,
      hexToRgb(theme.palette.primary.main).g,
      hexToRgb(theme.palette.primary.main).b,
      1, .7, 
      hexToRgb("#9e9caa").r, 
      hexToRgb("#9e9caa").g,
      hexToRgb("#9e9caa").b,
      1, true),
  },
}));

export default useStyles;
