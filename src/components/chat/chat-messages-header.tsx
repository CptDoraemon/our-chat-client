import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flexStart',
        padding: '0 50px'
    }
});

interface ChatMessagesHeaderProps {
    name: string
}

const ChatMessagesHeader: React.FC<ChatMessagesHeaderProps> = ({name}) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Typography variant={'h6'} component={'div'}>
                { name }
            </Typography>
        </div>
    )
};

export default ChatMessagesHeader