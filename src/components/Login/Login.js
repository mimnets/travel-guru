import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {handleGoogleSignIn, loginFrameworkInitialization} from './LoginInfo';

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
    
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res,true); // Required for login redirects
          })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }
    return (

        <div style={{display:'flex', justifyContent:'center'}}>
            
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                        <Button onClick={googleSignIn}>Google Sign in</Button>
                        </Typography>
                    </CardContent>
                </Card>
                
        </div>
    );
};

export default Login;