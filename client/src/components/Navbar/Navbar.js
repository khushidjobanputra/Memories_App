import React , {useState, useEffect} from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import memoriesLogo from '../../images/memories-Logo.png'
import memoriesText from '../../images/memories-Text.png'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () =>{

    const classes = useStyles();
    
    // const user = null;
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(user);

    const logout = () =>{
        dispatch({type: LOGOUT});
        navigate('/');
        setUser(null);
        window.location.reload();
    };

    const handleSignin = () =>{
        navigate('/auth');
    }

    useEffect(()=>{
        // const token = user?.token;

        //Manual
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img src={memoriesText} alt="icon" height="45px" />
                <img className={classes.image} src={memoriesLogo} alt="icon" height="40px"/>
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    //component={Link} to="/auth"
                    <Button onClick={handleSignin} variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;