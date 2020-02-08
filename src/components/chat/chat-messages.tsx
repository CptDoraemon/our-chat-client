import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatMessageItem from "./chat-message-item";

export interface Message {
    userImage: string,
    userName: string,
    message: string,
    isSelf: boolean
}

const mockData: Message[] = [];
for (let i=0; i< 10; i++) {
    mockData.push({
        userImage: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
        userName: 'Xiaoxi Yu',
        message: 'This is a message',
        isSelf: true
    });
    mockData.push({
        userImage: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
        userName: 'Tom',
        message: 'This is a message from someone else',
        isSelf: false
    })
}

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll'
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
});

const ChatMessages: React.FC = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                {
                    mockData.map((msg, i) => {
                        return <ChatMessageItem variant={msg.isSelf ? 'self' : 'others'} data={msg} key={i}/>
                    })
                }
            </div>
        </div>
    )
};

export default ChatMessages