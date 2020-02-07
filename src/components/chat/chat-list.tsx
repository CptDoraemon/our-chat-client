import React, {Dispatch, SetStateAction} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatListSearchBar from "./chat-list-search-bar";
import ChatListItem, {ChatListItemData} from "./chat-list-item";

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
        alignItems: 'center',
        justifyContent: 'start',
    }
});

interface ChatListProps {
    data: ChatListItemData[],
    setActiveChat: Dispatch<SetStateAction<number>>
}

const ChatList: React.FC<ChatListProps> = ({data, setActiveChat}) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <ChatListSearchBar/>
                {
                    data.map((_, i) => {
                        return <ChatListItem key={i} data={_} setActiveChat={setActiveChat} index={i}/>
                    })
                }
            </div>
        </div>
    )
};

export default ChatList