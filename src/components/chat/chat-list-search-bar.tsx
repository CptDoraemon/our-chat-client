import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '80px'
    }
});

const ChatListSearchBar: React.FC = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            search bar
        </div>
    )
};

export default ChatListSearchBar