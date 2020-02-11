import React, {Dispatch, SetStateAction} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatListSearchBar from "./chat-list-search-bar";
import ChatListItem, {ChatListItemData} from "./chat-list-item";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
    }
});

interface ChatListProps {
    data: ChatListItemData[],
}

const ChatList: React.FC<ChatListProps> = ({data}) => {
    const classes = useStyle();
    return (
        <SimpleBar className={classes.root}>
            <div className={classes.wrapper}>
                <ChatListSearchBar/>
                {
                    data.map((_, i) => {
                        return <ChatListItem key={i} data={_} />
                    })
                }
            </div>
        </SimpleBar>
    )
};

export default ChatList