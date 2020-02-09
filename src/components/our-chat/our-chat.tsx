import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import SideBar from "../side-bar/side-bar";
import {IUser} from "../../App";
import Chat from "../chat/chat";
import Contacts from "../contacts/contacts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export enum Tabs {
    CHAT = 'chat',
    CONTACTS = 'contacts'
}

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sideBar: {
        width: '80px',
        height: '100%',
    },
    main: {
        width: 'calc(100% - 80px)',
        height: '100%',
        backgroundColor: 'white'
    }
});

interface OurChatProps {
    user: IUser
}

const OurChat: React.FC<OurChatProps> = ({user}) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Router>
                <Route exact path="/">
                    <Redirect to={`/${Tabs.CHAT}`} />
                </Route>
                <div className={classes.sideBar}>
                    <Route path={'/:tab'} render={() => <SideBar user={user}/>} />
                </div>
                <div className={classes.main}>
                    <Switch>
                        <Route path={`/${Tabs.CHAT}/:uid?`} component={Chat} />
                        <Route path={`/${Tabs.CONTACTS}/:contactsTabOne?/:contactsTabTwo?/:uid?`} component={Contacts} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default OurChat