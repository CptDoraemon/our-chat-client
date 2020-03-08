import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatList from "./chat-list";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import ChatMessagesHeader from "./chat-messages-header";
import {useParams} from "react-router-dom";
import getUrl from "../../helpers/getUrl";
import getIDToken from "../../helpers/getIDToken";
import {ChatListItemData} from "./chat-list-item";

interface IParams {
    uid?: string
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(220, 220, 220)'
    },
    list: {
        width: '400px',
        height: '100%'
    },
    right: {
        width: 'calc(100% - 400px)',
        height: '100%'
    },
    messages: {
        width: '100%',
        height: 'calc(70vh - 80px)'
    },
    messagesHeader: {
        width: '100%',
        height: '80px'
    },
    input: {
        width: '100%',
        height: '30vh'
    },
    border: {
        border: 'solid 1px rgb(200, 200, 200)'
    }
});

const Chat: React.FC = (props) => {
    const classes = useStyles();
    const uid = useParams<IParams>().uid;
    let name = '';
    const url = getUrl(`get-friends-list-chat`);

    const [friendList, setFriendList] = useState<null | ChatListItemData[]>(null);
    useEffect( () => {
        (async () => {
            const idToken = await getIDToken();
            const res = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
            });
            const json = await res.json();
            setFriendList(json.data);
            console.log(json);
        })();
    }, []);

    return (
        <div className={classes.root}>
            <div className={`${classes.list} ${classes.border}`}>
                { friendList !== null && <ChatList data={friendList}/>}
            </div>
            <div className={classes.right}>
                <div className={`${classes.messagesHeader} ${classes.border}`}>
                    <ChatMessagesHeader name={name}/>
                </div>
                <div className={`${classes.messages} ${classes.border}`}>
                    <ChatMessages/>
                </div>
                <div className={`${classes.input} ${classes.border}`}>
                    <ChatInput/>
                </div>
            </div>
        </div>
    )
};

export default Chat