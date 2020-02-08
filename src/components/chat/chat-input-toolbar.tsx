import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {IconButton} from "@material-ui/core";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

const ChatInputToolbar: React.FC = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <IconButton aria-label="emoji">
                <EmojiEmotionsIcon/>
            </IconButton>
        </div>
    )
};

export default ChatInputToolbar