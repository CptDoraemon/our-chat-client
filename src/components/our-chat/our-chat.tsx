import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import SideBar from "../side-bar/side-bar";
import {IUser} from "../../App";
import Chat from "../chat/chat";
import Contacts from "../contacts/contacts";

export enum Tabs {
    CHAT = 'CHAT',
    CONTACTS = 'CONTACTS'
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
    const [tab, setTab] = useState<Tabs>(Tabs.CHAT);
    return (
        <div className={classes.root}>
            <div className={classes.sideBar}>
                <SideBar user={user} tab={tab} setTab={setTab}/>
            </div>
            <div className={classes.main}>
                {
                    tab === Tabs.CHAT ?
                        <Chat/> :
                        <Contacts/>
                }
            </div>
        </div>
    )
};

export default OurChat