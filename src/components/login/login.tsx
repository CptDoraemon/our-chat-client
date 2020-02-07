import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCutwMKNhNymiI89-uOFRu--twid_iCbV0",
    authDomain: "our-chat-765d9.firebaseapp.com",
    databaseURL: "https://our-chat-765d9.firebaseio.com",
    projectId: "our-chat-765d9",
    storageBucket: "our-chat-765d9.appspot.com",
    messagingSenderId: "96094457493",
    appId: "1:96094457493:web:572205ee08757e9373159c",
    measurementId: "G-KQCYN6YDH1"
};
firebase.initializeApp(config);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/chat',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    )
};

export default Login