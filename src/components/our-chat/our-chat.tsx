import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import SideBar from "../side-bar/side-bar";
import {IUser} from "../../App";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sideBar: {
        width: '80px',
        height: '100%',
    },
    left: {
        width: '400px',
        height: '100%',
        backgroundColor: grey[300]
    },
    right: {
        width: 'calc(100% - 250px)',
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
            <div className={classes.sideBar}>
                <SideBar user={user}/>
            </div>
            <div className={classes.left}> </div>
            <div className={classes.right}> </div>
        </div>
    )
};

export default OurChat