import React, {useEffect, useState} from 'react';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import firebase from 'firebase';
import Login from "./components/login/login";
import OurChat from "./components/our-chat/our-chat";
import theme from "./theme";

interface IUser {
    displayName: string | null,
    email: string | null,
    emailVerified: boolean,
    photoURL: string | null,
    isAnonymous: boolean,
    uid: string,
    providerData: any
}

const App = () => {

    const [user, setUser] = useState<null | IUser>(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userInfo: IUser = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    isAnonymous: user.isAnonymous,
                    uid: user.uid,
                    providerData: user.providerData
                };
                setUser(userInfo)
            } else {
                setUser(null)
            }
        });
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            { user ? <OurChat/> : <Login/> }
        </ThemeProvider>
    );
};

export default App;
