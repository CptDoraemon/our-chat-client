import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsListItem, {ContactsListItemData} from "./contacts-list-item";
import ContactsListItemDividerAlphabetic from "./contacts-list-item-divider-alphabetic";
import ContactsListItemGeneric from "./contacts-list-item-generic";
import RecentActorsIcon from '@material-ui/icons/RecentActors';

function assembleData(data: ContactsListItemData[], selectedContact: number, toggleContact: (value: number) => void) {
    let lastIndex = '';
    const components: React.ReactElement[] = [];
    data.forEach((item, i) => {
        const currentIndex = item.name[0];
        if (currentIndex !== lastIndex) {
            lastIndex = currentIndex;
            components.push(<ContactsListItemDividerAlphabetic title={currentIndex} key={`divider-${currentIndex}`}/>)
        }
        components.push(<ContactsListItem data={item} key={i} isActive={selectedContact === i} setActive={() => toggleContact(i)}/>)
    });
    return components
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(220, 220, 220)',
        overflowY: 'scroll'
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

interface ContactsListProps {
    data: ContactsListItemData[],
    selectedContact: number,
    toggleContact: (value: number) => void,
    addNewFriend: () => void
}

const ContactsList: React.FC<ContactsListProps> = ({data, selectedContact, toggleContact, addNewFriend }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <ContactsListItemGeneric title={'New Friend'} color={'white'} backgroundColor={'orange'} onClick={addNewFriend}>
                    <RecentActorsIcon/>
                </ContactsListItemGeneric>
            {
                assembleData(data, selectedContact, toggleContact)
            }
            </div>
        </div>
    )
};

export default ContactsList