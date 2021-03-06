import React, {Dispatch, SetStateAction} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link, useParams} from "react-router-dom";
import {Tabs} from "../our-chat/our-chat";

export interface ChatListItemData {
    userName: string,
    image: string,
    lastMessage: string,
    unreadMessages: number,
    lastMessageDate: string,
    uid: string
}

interface IParams {
    uid?: string
}

interface ChatListItemProps {
    data: ChatListItemData,
}

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '80px',
        borderBottom: 'solid 1px rgb(230, 230, 230)',
        borderRadius: 0,
    },
    rootActive: {
        backgroundColor: 'rgb(220, 220, 220)'
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        fontSize: '0.875rem'
    },
    left: {
        width: '80px',
        height: '100%',
    },
    avatar: {
        position: 'relative'
    },
    notification: {
        position: 'absolute',
        zIndex: 10,
        width: '1rem',
        height: '1rem',
        borderRadius: '1rem',
        backgroundColor: 'red',
        top: '-0.5rem',
        right: '-0.5rem',
        lineHeight: '1rem',
        textAlign: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '0.8rem',
    },
    right: {
        width: 'calc(100% - 80px)',
        padding: '0 10px 0 0',
        height: '100%',
    },
    rightRow: {
        width: '100%',
        height: '1.5rem',
        lineHeight: '1.5rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    message: {
        color: 'grey',
    }
});

const ChatListItem: React.FC<ChatListItemProps> = ({data}) => {
    const classes = useStyle();
    const activeUid = useParams<IParams>().uid;
    const isActive = activeUid === data.uid;

    return (
        <Card className={ isActive ? `${classes.root} ${classes.rootActive}` : classes.root}>
            <Link to={`/${Tabs.CHAT}/${data.uid}`}>
                <CardActionArea className={classes.wrapper}>
                <div className={classes.left + ' row-c-c'}>
                    <div className={classes.avatar}>
                        <Avatar alt={data.userName || ''} src={data.image} variant="rounded"/>
                        <div className={classes.notification}>
                            { data.unreadMessages }
                        </div>
                    </div>
                </div>
                <div className={classes.right + ' col-c-c'}>
                    <div className={classes.rightRow}>
                        <Box fontWeight={700}>
                            { data.userName }
                        </Box>
                    </div>
                    <div className={classes.rightRow + ' ' + classes.message}>
                            { data.lastMessage }
                    </div>
                </div>
                </CardActionArea>
            </Link>
        </Card>
    )
};

export default ChatListItem