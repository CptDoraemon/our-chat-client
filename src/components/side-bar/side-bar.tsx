import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import {IUser} from "../../App";
import {Avatar} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from "@material-ui/core/IconButton";
import {Link, useParams} from "react-router-dom";
import {Tabs} from "../our-chat/our-chat";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: blueGrey[900],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});

interface IParam {
    tab: Tabs
}

interface SideBarProps {
    user: IUser,
}

const SideBar: React.FC<SideBarProps> = (props) => {
    const classes = useStyle();
    const tab = useParams<IParam>().tab;

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Avatar alt={props.user.displayName || ''} src={props.user.photoURL || ''} variant="rounded"/>
            </div>
            <div className={classes.row}>
                <Link to={`/${Tabs.CHAT}`}>
                    <IconButton aria-label={'Chat'} color={'inherit'}>
                        { tab === Tabs.CHAT ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon/> }
                    </IconButton>
                </Link>
            </div>
            <div className={classes.row}>
                <Link to={`/${Tabs.CONTACTS}`}>
                    <IconButton aria-label={'contacts'} color={'inherit'}>
                        { tab === Tabs.CONTACTS ? <PersonIcon /> : <PersonOutlineIcon/> }
                    </IconButton>
                </Link>
            </div>
        </div>
    )
};

export default SideBar