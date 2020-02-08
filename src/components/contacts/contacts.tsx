import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsList from "./contacts-list";
import ContactsAddNewFriend from "./contacts-add-new-friend";
import {ContactsDetailFriend} from "./contacts-detail";

const mockData = new Array(50);
mockData.fill(    {
    name: 'Xiaoxi Yu',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
});
mockData.unshift({
    name: 'Tom',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
});

enum ContactsPageOne {
    NEW_FRIEND='NEW_FRIEND',
    CONTACTS='CONTACTS'
}

enum ContactsPageTwo {
    CONTACT_DETAIL='CONTACT_DETAIL',
    ADD_NEW_FRIEND='ADD_NEW_FRIEND'
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

    const [selectedContact, setSelectedContact] = useState(-1);
    const [pageOne, setPageOne] = useState(ContactsPageOne.CONTACTS);
    const [pageTwo, setPageTwo] = useState(ContactsPageTwo.CONTACT_DETAIL);

    const toggleContact = (value: number) => {
        setSelectedContact(value)
    };

    const setPageOneNewFriend = () => {
        if (pageOne !== ContactsPageOne.NEW_FRIEND) setPageOne(ContactsPageOne.NEW_FRIEND)
    };

    const setPageOneContacts = () => {
        if (pageOne !== ContactsPageOne.CONTACTS) setPageOne(ContactsPageOne.CONTACTS)
    };

    return (
        <div className={classes.root}>
            <div className={`${classes.list} ${classes.border}`}>
                {
                    pageOne === ContactsPageOne.CONTACTS ?
                        <ContactsList data={sortedData} selectedContact={selectedContact} toggleContact={toggleContact} addNewFriend={setPageOneNewFriend}/> :
                        <ContactsAddNewFriend backToContacts={setPageOneContacts}/>
                }
            </div>
            <div className={classes.right + ' row-c-c'}>
                <ContactsDetailFriend name={'mock name'} image={'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ'}/>
            </div>
        </div>
    )
};

export default Contacts