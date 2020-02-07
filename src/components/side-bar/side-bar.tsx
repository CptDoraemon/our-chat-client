import React, {Dispatch, SetStateAction} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import {IUser} from "../../App";
import {Avatar} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from "@material-ui/core/IconButton";
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

interface SideBarProps {
    user: IUser,
    tab: Tabs,
    setTab: Dispatch<SetStateAction<Tabs>>
}

const SideBar: React.FC<SideBarProps> = (props) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Avatar alt={props.user.displayName || ''} src={props.user.photoURL || ''} variant="rounded"/>
            </div>
            <div className={classes.row}>
                <IconButton aria-label={'Chat'} onClick={() => props.setTab(Tabs.CHAT)} color={'inherit'}>
                    { props.tab === Tabs.CHAT ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon/> }
                </IconButton>
            </div>
            <div className={classes.row}>
                <IconButton aria-label={'contacts'} onClick={() => props.setTab(Tabs.CONTACTS)} color={'inherit'}>
                    { props.tab === Tabs.CONTACTS ? <PersonIcon /> : <PersonOutlineIcon/> }
                </IconButton>
            </div>
        </div>
    )
};

export default SideBar