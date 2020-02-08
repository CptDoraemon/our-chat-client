import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsListItem, {ContactsListItemData} from "./contacts-list-item";
import ContactsListItemDividerAlphabetic from "./contacts-list-item-divider-alphabetic";
import ContactsListItemGeneric from "./contacts-list-item-generic";
import {Link} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const defaultInput = 'Search Email';

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
    },
    backLink: {
        width: '100%',
        height: '50px',
        lineHeight: '50px',
        padding: '0 8px'
    },
    search: {
        width: '100%',
        height: '2rem',
        margin: '16px 0',
        '& input': {
            width: 'calc(100% - 82px)',
            height: '100%',
            fontSize: 'inherit',
            margin: 0,
            border: 'none',
            padding: '8px',
            lineHeight: '1.5rem',
        },
        '& :focus': {
            outline: 'none'
        }
    },
    searchIcon: {
        width: '30px',
        height: '1.5rem'
    }
});

interface ContactsAddNewFriendProps {
    backToContacts: () => void
}

const ContactsAddNewFriend: React.FC<ContactsAddNewFriendProps> = ({backToContacts}) => {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState(defaultInput);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value)
    };

    const inputFocusHandler = () => {
        if (searchInput === defaultInput) setSearchInput('')
    };

    const inputBlurHandler = () => {
        if (searchInput === '') setSearchInput(defaultInput)
    };

    const isSearchCardVisible = searchInput !== '' && searchInput !== defaultInput;

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.backLink}>
                    <Link href="#" onClick={backToContacts}>
                        {`< Back to Contacts`}
                    </Link>
                </div>
                <div className={classes.search + ' row-c-c'}>
                    <div className={classes.searchIcon + ' row-c-c'}>
                        <SearchIcon style={{width: '20px', height: '20px'}}/>
                    </div>
                    <input type={'text'} value={searchInput} onChange={inputChangeHandler} onFocus={inputFocusHandler} onBlur={inputBlurHandler}/>
                </div>
                {
                    isSearchCardVisible &&
                    <ContactsListItemGeneric title={`Search: ${searchInput}`} color={'white'} backgroundColor={'green'} onClick={() => false}>
                        <SearchIcon/>
                    </ContactsListItemGeneric>
                }
            </div>
        </div>
    )
};

export default ContactsAddNewFriend