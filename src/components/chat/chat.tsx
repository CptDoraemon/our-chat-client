import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatList from "./chat-list";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import ChatMessagesHeader from "./chat-messages-header";

const mockData = new Array(50);
mockData.fill(    {
    userName: 'Xiaoxi Yu',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
    lastMessage: 'This is last message, long long long long long long long long long long.',
    unreadMessages: 5,
    lastMessageDate: '02:12'
});
mockData.unshift({
    userName: 'Tom',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
    lastMessage: 'hahaha',
    unreadMessages: 2,
    lastMessageDate: '01:55'
});

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

const Chat: React.FC = () => {
    const classes = useStyles();

    const [activeChat, setActiveChat] = useState(0);

    return (
        <div className={classes.root}>
            <div className={`${classes.list} ${classes.border}`}>
                <ChatList data={mockData} setActiveChat={setActiveChat} activeChat={activeChat}/>
            </div>
            <div className={classes.right}>
                <div className={`${classes.messagesHeader} ${classes.border}`}>
                    <ChatMessagesHeader name={mockData[activeChat].userName}/>
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