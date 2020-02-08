import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Message} from "./chat-messages";
import {Avatar, createStyles} from "@material-ui/core";

const useStyleSelf = makeStyles(() => createStyles({
    root: {
        width: '100%',
        height: '80px',
        margin: '16px 16px 16px 0',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    avatarWrapper: {
        width: '50px',
        height: '50px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    avatar: {
        width: '30px',
        height: '30px'
    },
    main: {
        width: 'calc(100% - 80px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    userName: {
        fontWeight: 700,
        color: 'grey',
    },
    message: {
        backgroundColor: '#91ED61',
        padding: '8px',
        borderRadius: '5px',
        position: 'relative'
    },
    messagePointer: {
        position: 'absolute',
        width: '8px',
        height: '8px',
        transform: 'rotate(45deg)',
        backgroundColor: 'inherit',
        right: '-3px',
        top: '0.875rem'
    }
}));

const useStyleOthers = makeStyles(() => createStyles({
    root: {
        width: '100%',
        height: '80px',
        margin: '16px 16px 16px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    avatarWrapper: {
        width: '50px',
        height: '50px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    avatar: {
        width: '30px',
        height: '30px'
    },
    main: {
        width: 'calc(100% - 80px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    userName: {
        fontWeight: 700,
        color: 'grey',
        width: '100%'
    },
    message: {
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '5px',
        position: 'relative'
    },
    messagePointer: {
        position: 'absolute',
        width: '8px',
        height: '8px',
        transform: 'rotate(45deg)',
        backgroundColor: 'inherit',
        left: '-3px',
        top: '0.875rem'
    }
}));

interface ChatMessageItemProps {
    variant: 'self' | 'others',
    data: Message
}

const ChatMessageItem: React.FC<ChatMessageItemProps> = ({variant, data}) => {
    const classesSelf = useStyleSelf();
    const classesOthers = useStyleOthers();
    const classes = data.isSelf ? classesSelf : classesOthers;
    return (
        <div className={classes.root}>
            <div className={classes.avatarWrapper}>
                <Avatar variant="rounded" alt={data.userName} src={data.userImage} className={classes.avatar}/>
            </div>
            <div className={classes.main}>
                {
                    !data.isSelf &&
                    <div className={classes.userName}>
                        { data.userName }
                    </div>
                }
                <div className={classes.message}>
                    <div className={classes.messagePointer}> </div>
                    { data.message }
                </div>
            </div>
        </div>
    )
};

export default ChatMessageItem