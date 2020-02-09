import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsList from "./contacts-list";
import ContactsAddNewFriend from "./contacts-add-new-friend";
import {ContactsDetailFriend, ContactsDetailStranger} from "./contacts-detail";
import {useParams} from "react-router-dom";

const mockData = new Array(50);
mockData.fill(    {
    name: 'Xiaoxi Yu',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
});
mockData.unshift({
    name: 'Tom',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
});

interface IParams {
    contactsTabOne?: ContactsTabOne,
    contactsTabTwo?: ContactsTabTwo,
    uid?: string
}

export enum ContactsTabOne {
    NEW_FRIEND='new_friend',
    FRIEND='friend'
}

export enum ContactsTabTwo {
    CONTACT_DETAIL_FRIEND='contact_detail_friend',
    CONTACT_DETAIL_STRANGER='contact_detail_stranger'
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(220, 220, 220)'
    },
    list: {
        width: '400px',
        height: '100%'
    },
    right: {
        width: 'calc(100% - 400px)',
        height: '100%'
    },
    border: {
        border: 'solid 1px rgb(200, 200, 200)'
    }
});

const Contacts: React.FC = () => {
    const classes = useStyles();
    const sortedData = mockData.sort((a, b) => {
        return a.name.localeCompare(b.name)
    });

    const params = useParams<IParams>();
    const tabOne = params.contactsTabOne || ContactsTabOne.FRIEND;
    const tabTwo = params.contactsTabTwo;
    const uid = params.uid || '';

    // const [selectedContact, setSelectedContact] = useState(-1);
    // const [pageOne, setPageOne] = useState(ContactsPageOne.CONTACTS);
    // const [pageTwo, setPageTwo] = useState(ContactsPageTwo.CONTACT_DETAIL_FRIEND);
    //
    // const setPageOneNewFriend = () => {
    //     if (pageOne !== ContactsPageOne.NEW_FRIEND) setPageOne(ContactsPageOne.NEW_FRIEND)
    // };
    //
    // const setPageOneContacts = () => {
    //     if (pageOne !== ContactsPageOne.CONTACTS) setPageOne(ContactsPageOne.CONTACTS)
    // };
    //
    // const handleClickContact = (value: number) => {
    //     setSelectedContact(value)
    // };
    //
    // const handleClickNewFriend = () => {
    //     setPageOneNewFriend()
    // };
    //
    // const handleClickBackToContacts = () => {
    //     setPageOneContacts()
    // };

    return (
        <div className={classes.root}>
            <div className={`${classes.list} ${classes.border}`}>
                {
                    tabOne === ContactsTabOne.FRIEND ?
                        <ContactsList
                            data={sortedData}
                            activeUid={uid}
                        /> :
                        <ContactsAddNewFriend />
                }
            </div>
            <div className={classes.right + ' row-c-c'}>
                {
                    uid === '' ?
                        null :
                        tabTwo === ContactsTabTwo.CONTACT_DETAIL_FRIEND ?
                        <ContactsDetailFriend name={''} image={''}/> :
                        <ContactsDetailStranger name={'123'} image={'#'}/>
                }
            </div>
        </div>
    )
};

export default Contacts