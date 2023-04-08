import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    Height: '400px',
  },
  card: {
    display: 'flex', 
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '30px',
    flex: '60%',
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    flex: '40%',
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px', overflowY: 'auto', marginRight: '30px'
  },
  media2: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border2: {
    border: 'solid',
  },
  fullHeightCard2: {
    height: '100%',
  },
  card2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    width: '300px',
    marginTop: '20px',
    position: 'relative',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details2: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  title2: {
    padding: '0 10px',
  },
}));

