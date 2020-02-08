import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {TextareaAutosize} from "@material-ui/core";
import ChatInputToolbar from "./chat-input-toolbar";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        position: 'relative',
        '& :focus': {
            outline: 'none'
        }
    },
    toolbar: {
        width: '100%',
        height: '50px',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20
    },
    toolBarPlaceHolder: {
        width: '100%',
        height: '50px',
        position: 'relative',
        zIndex: 10
    },
    textarea: {
        zIndex: 10,
        width: '100%',
        minHeight: 'calc(100% - 50px)',
        border: 'none',
        fontSize: 'inherit',
        backgroundColor: 'inherit',
        padding: '0 16px',
        margin: 0
    }
});

const ChatInput: React.FC = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <ChatInputToolbar/>
            </div>
            <div className={classes.toolBarPlaceHolder}> </div>
            <TextareaAutosize aria-label="empty textarea" placeholder="" className={classes.textarea}/>
        </div>
    )
};

export default ChatInput