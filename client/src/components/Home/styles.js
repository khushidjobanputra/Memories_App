import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 15,
    marginBottom: '2rem',
    display: 'flex',
    padding: '16px',
  },
  searchButton:{
    marginBottom: '5px',
    marginTop: '15px'
  },
  pagination: {
    borderRadius: 15,
    marginTop: '1rem',
    padding: '20px',
  },
           
  btngrad: {
    background: 'linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)',
    margin: '10px',
    padding: '15px 25px',
    textalign: 'center',
    texttransform: 'uppercase',
    transition: '0.5s',
    backgroundsize: '200% auto',
    color: 'black',
    boxshadow: '0 0 20px #eee',
    borderRadius: '10px',
    display: 'block',
    fontWeight: '400'
  },

  // btngrad:hover{
  //   backgroundposition: 'right center', /* change the direction of the change here */
  //   color: '#fff',
  //   textdecoration: 'none',
  // },
 
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));