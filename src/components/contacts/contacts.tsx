import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsList from "./contacts-list";

const mockData = new Array(50);
mockData.fill(    {
    name: 'Xiaoxi Yu',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
});
mockData.unshift({
    name: 'Tom',
    image: 'https://lh3.googleusercontent.com/a-/AAuE7mC3eMfsUaN4ngbp2Zg2t9CjVeWgRAos_E54qcxQSQ',
});

enum ContactsPage {
    NEW_FRIEND='NEW_FRIEND',
    CONTACT_DETAIL='CONTACT_DETAIL'
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
    const [page, setPage] = useState(ContactsPage.CONTACT_DETAIL);

    const toggleContact = (value: number) => {
        setSelectedContact(value)
    };

    return (
        <div className={classes.root}>
            <div className={`${classes.list} ${classes.border}`}>
                <ContactsList data={sortedData} selectedContact={selectedContact} toggleContact={toggleContact}/>
            </div>
            <div className={classes.right}>
                123
            </div>
        </div>
    )
};

export default Contacts