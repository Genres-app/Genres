import React, {useState} from 'react'
//import ReactDom from 'react-dom';
import {useDispatch} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import useStyles from './styles';
import Input from './Input';

import {AUTH} from '../../constants/actionTypes';
import * as api from '../../api/index'

const initialState = {firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword:''};

const Auth = (props) => {
    
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);

    const signin = (formData,history) => async (dispatch) => {
        try {
            const {data} = await api.signIn(formData);
    
            dispatch({type: AUTH, data});
            history.push('/');
        } catch (err) {
            
            console.log(err.response.data.message);
            setError(err.response.data.message);
            
            
    
        }
    }
    
    const signup = (formData,history) => async (dispatch) => {
        try {
            const {data} = await api.signUp(formData);
    
            dispatch({type: AUTH, data});
            history.push('/');
        } catch (err) {
            console.log(err.response.data);
            setError(err.response.data.message);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if(isSignup) {
            
            dispatch(signup(formData, history));
            
        } else {
            
            dispatch(signin(formData, history));
            
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup)=> !prevIsSignup);
        setShowPassword(false);
        setError(null);
    };
    
    return (
        
        <Container component = "main" maxWidth = "xs">
            <Paper className = {classes.paper} elevation = {0}>

                <Typography gutterBottom variant = "h4" >{isSignup ? 'Join Genres' : 'Log-In'}</Typography>
                <Grid container justify = "flex-start">
                        <Grid item>
                            <Button size = 'small' onClick = {switchMode} className = {classes.paddingDown}>
                                {isSignup ? 'Already a member? Log in': "Not a member? Sign Up"}
                            </Button>

                            {
                    error && (
                        <h4 className = {classes.error}>{error}</h4>
                    )
                }

                        </Grid>
                        
                </Grid>
                
                <form className = {classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing = {2}>
                        {
                            isSignup && (
                                <> 
                                    <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
                                    <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half/>
                                    <Input name = "username" label = "Username" handleChange = {handleChange}/>
                                </>
                            )
                        }
                        <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email"/>
                        {
                            !isSignup && (
                                <>
                                <Grid container justify = "flex-end">
                                    <Button size = "small" className = {classes.forgotPassword}>Forgot Email?</Button>
                                </Grid>
                                </>
                            )
                        }
                        <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}/>
                        {
                            isSignup && <Input name = "confirmPassword" label = "Confirm Password" handleChange = {handleChange} type = "password"/>
                        }
                        {
                            !isSignup && (
                                <>
                                <Grid container justify = 'flex-end'>
                                    <Button size = "small" className = {classes.forgotPassword}>Forgot Password?</Button>
                                </Grid>
                                </>
                            )
                        }
                    </Grid>
                    <Grid container justify = 'flex-end'>
                        {
                            isSignup && (
                                <>
                                <Typography variant = "subtitle2" className = {classes.terms}>By signing up, you agree to Genres' <Link to = "/terms" >Terms of Service </Link>and <Link to = "privacy" >Privacy Policy</Link>.</Typography>
                                </>
                            )
                            
                        }
                        <Grid item>
                        <Button disableRipple type = "submit" className = {classes.submit}>
                        {isSignup ? 'Join' : 'Log-In'}
                    </Button>
                        </Grid>
                    </Grid>
                   
                    

                </form>
            </Paper>

        </Container>

    )
}

export default Auth
