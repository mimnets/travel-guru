import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {loginFrameworkInitialization, handleGoogleSignIn, handleFBSignIn, createUserWithEmailAndPass} from './LoginInfo';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        minWidth: 275,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Login = () => {
    const classes = useStyles();
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        photoURL: '',
        password:''
    });

    loginFrameworkInitialization();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn =() => {
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res, true); // Required for login redirects
        })
    }

    // handleResponse need to declare as below :
    // handleResponse start
    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }
    // handleResponse end

    const fbSignIn = () => {
        handleFBSignIn()
        .then(res => {
            handleResponse(res,true);
        })
    }
    const handleSubmit = (event) => {
        if(newUser && user.email && user.password){
            createUserWithEmailAndPass(user.name, user.email, user.password)
            .then(res => {
            handleResponse(res, true);
        })
        }
    event.preventDefault(); 
    }
    return (

        <div style={{display:'flex', justifyContent:'center'}}>
            
                <Card className={classes.root}>
                    <CardContent>
                    <form action="" onSubmit={handleSubmit}>
                    <CardContent>
                    
                    <TextField
                        id="outlined-disabled"
                        label="Name"
                        defaultValue=""
                        variant="outlined"
                        />
                        </CardContent>
                        <CardContent>
                        <TextField
                        id="outlined-disabled"
                        label="Email"
                        defaultValue=""
                        variant="outlined"
                        />
                        </CardContent>
                        
                        <CardContent>
                        <TextField
                        id="outlined-disabled"
                        label="Password"
                        defaultValue=""
                        variant="outlined"
                        />
                        </CardContent>
                        <CardContent>
                        <Button onClick={() => {handleSubmit()}}>Submit</Button>
                        </CardContent>
                        </form>
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                        <Typography variant="h5" component="h2">

                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                        </Typography> */}
                        <Typography variant="body2" component="p">
                        <Button onClick={googleSignIn}>Google Sign in</Button>
                        <Button onClick={fbSignIn}>Facebook Sign in</Button>
                        </Typography>
                    </CardContent>
                </Card>


        </div>
    );
};

export default Login;