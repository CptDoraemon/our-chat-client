import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsListItem, {ContactsListItemData} from "./contacts-list-item";
import ContactsListItemDividerAlphabetic from "./contacts-list-item-divider-alphabetic";
import ContactsListItemGeneric from "./contacts-list-item-generic";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {Tabs} from "../our-chat/our-chat";
import {ContactsTabOne} from "./contacts";

function assembleData(data: ContactsListItemData[], activeUid: string) {
    let lastIndex = '';
    const components: React.ReactElement[] = [];
    data.forEach((item, i) => {
        const currentIndex = item.name[0];
        if (currentIndex !== lastIndex) {
            lastIndex = currentIndex;
            components.push(<ContactsListItemDividerAlphabetic title={currentIndex} key={`divider-${currentIndex}`}/>)
        }
        components.push(<ContactsListItem name={item.name} image={item.image} key={i} isActive={activeUid === item.uid} linkTo={`/${Tabs.CONTACTS}/${ContactsTabOne.FRIEND}/${item.uid}`}/>)
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
    activeUid: string,
}

const ContactsList: React.FC<ContactsListProps> = (
    {
        data,
        activeUid
    }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <ContactsListItemGeneric title={'New Friend'} color={'white'} backgroundColor={'orange'} linkTo={`/${Tabs.CONTACTS}/${ContactsTabOne.NEW_FRIEND}`}>
                    <RecentActorsIcon/>
                </ContactsListItemGeneric>
            {
                assembleData(data, activeUid)
            }
            </div>
        </div>
    )
};

export default ContactsList