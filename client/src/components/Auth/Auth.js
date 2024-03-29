import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import {GoogleLogin} from 'react-google-login';
import useStyles from './styles';
import Input from './Input';
// import Icon from './icon';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {signin, signup} from '../../action/auth';

const initialState = { firstName:'', lastName:'', email:'', password:'', confirmPassword:''};

const Auth = () =>{

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        console.log(formData)
        e.preventDefault();
        
        if(isSignup){    
            //signup the user
            dispatch(signup(formData, navigate));
        }
        else{
            dispatch(signin(formData, navigate));
        }
    };

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () =>{
        setIsSignUp((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    // const googleSuccess = async (res) =>{
    //     const result = res?.ProfileObj;
    //     const token = res?.tokenId;

    //     try{
    //         dispatch({type: 'AUTH', data: {result, token}});
    //         navigate('/');
    //     }catch(error){
    //         console.log(error);
    //     }
    // }; 

    // const googleFailure = (error) =>{
    //     console.log(error);
    //     console.log('Google Sign In was unsuccessful. Try Again Later');
    // };

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name='lastName' label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label="Email Address" handleChange={handleChange} type="email" />
                        <Input name='password' label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit} >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    {/* <GoogleLogin
                        clientId = "1015147900831-5d2etleblevksj1b05gvr8pq7fp2rcvm.apps.googleusercontent.com"
                        render ={(renderProps)=>(
                            <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon/>} 
                            variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFaliure={googleFailure}
                        cookiePolicy={'single_host_origin'}
                    /> */}
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an accpunt? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;

//1015147900831-5d2etleblevksj1b05gvr8pq7fp2rcvm.apps.googleusercontent.com
//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