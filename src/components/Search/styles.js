import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    
  bookImage: {
    margin: 'none',
    
    width: '80%',
    height: 'auto',
    aspectRatio: 1/1.33,
    
  },
  paper: {
    padding: theme.spacing(2),
    width: '650px',
    height: '180px'
    
    
  },
  image: {
    width: 150,
    height: 150,
    
  },
  upvotes: {
    color: 'grey',
    fontSize: '14px',
  },
  searchResults:{
    marginTop: '30px',
    marginBottom: '35px',
    fontSize: '20px', 
    fontWeight: 'bold',
  },
  likeButton: {
    color: '#3bbf9b',
    // color: '#1bb33f',
  },
  author: {
    fontSize: '12px',
    marginTop: '2px',
  },
  status: {
      color: 'grey',
      fontSize: '12px',
      margin: '5px 0',
  },
  pagination: {
    marginTop: '30px',

  },
  

  }));

export default useStyles;