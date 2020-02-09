import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactsListItem, {ContactsListItemData} from "./contacts-list-item";
import ContactsListItemGeneric from "./contacts-list-item-generic";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import getUrl from "../../helpers/getUrl";
import {Tabs} from "../our-chat/our-chat";
import {ContactsTabOne} from "./contacts";
import firebase from 'firebase';
import getIDToken from "../../helpers/getIDToken";

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
    },
    errorMessage: {
        width: '100%',
        height: '1.5rem',
        textAlign: 'center'
    }
});

enum SearchResultStatus {
    'OK'='ok',
    'NOT_FOUND'='notFound',
    'INVALID_EMAIL'='invalidEmail',
    'SEARCHED_SELF'='searchedSelf',
    'ERROR'='error'
}

interface SearchResultData {
    name: string,
    image: string,
    uid: string,
    isFriend: boolean
}

interface SearchResultOK {
    status: SearchResultStatus.OK,
    data: SearchResultData
}

interface SearchResultNotOK {
    status: Exclude<SearchResultStatus, SearchResultStatus.OK>,
}

type SearchResult = SearchResultOK | SearchResultNotOK;

interface ContactsAddNewFriendProps {

}

const ContactsAddNewFriend: React.FC<ContactsAddNewFriendProps> = () => {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState(defaultInput);
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState<null | SearchResult>(null);
    const shouldSearch = searchInput !== '' && searchInput !== defaultInput;

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (searchResult) setSearchResult(null);
        setSearchInput(e.currentTarget.value)
    };

    const inputFocusHandler = () => {
        if (searchInput === defaultInput) setSearchInput('')
    };

    const inputBlurHandler = () => {
        if (searchInput === '') setSearchInput(defaultInput)
    };

    const handleSearch = async() => {
        if (!shouldSearch || isSearching) return;
        setIsSearching(true);
        setSearchResult(null);

        try {
            const idToken = await getIDToken();
            const url = getUrl(`search-user?email=${encodeURIComponent(searchInput)}&token=${encodeURIComponent(idToken)}`);
            const res = await fetch(url);
            const json = await res.json();
            setIsSearching(false);
            switch(json.status) {
                case SearchResultStatus.NOT_FOUND:
                    setSearchResult({
                        status: SearchResultStatus.NOT_FOUND
                    });
                    break;
                case SearchResultStatus.INVALID_EMAIL:
                    setSearchResult({
                        status: SearchResultStatus.INVALID_EMAIL
                    });
                    break;
                case SearchResultStatus.SEARCHED_SELF:
                    setSearchResult({
                        status: SearchResultStatus.SEARCHED_SELF
                    });
                    break;
                case SearchResultStatus.ERROR:
                    setSearchResult({
                        status: SearchResultStatus.ERROR
                    });
                    break;
                case SearchResultStatus.OK:
                    setSearchResult({
                        status: SearchResultStatus.OK,
                        data: {...json.data}
                    });
                    break;
                default:
                    setSearchResult({
                        status: SearchResultStatus.ERROR
                    });
            }
        } catch (e) {
            setIsSearching(false);
            setSearchResult({
                status: SearchResultStatus.ERROR
            });
        }
    };


    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.backLink}>
                    <Link to={`/${Tabs.CONTACTS}/${ContactsTabOne.FRIEND}`}>
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
                    shouldSearch &&
                    <ContactsListItemGeneric title={`Search: ${searchInput}`} color={'white'} backgroundColor={'green'} onClick={handleSearch}>
                        <SearchIcon/>
                    </ContactsListItemGeneric>
                }
                {
                    searchResult && searchResult.status !== SearchResultStatus.OK &&
                        <div className={classes.errorMessage}>
                            <ContactsAddNewFriendErrorMessage searchResult={searchResult}/>
                        </div>
                }
                {
                    searchResult && searchResult.status === SearchResultStatus.OK &&
                        <ContactsListItem name={searchResult.data.name} image={searchResult.data.image} isActive={false} linkTo={''}/>
                }
            </div>
        </div>
    )
};

interface ContactsAddNewFriendErrorMessageProps {
    searchResult: SearchResult
}

const ContactsAddNewFriendErrorMessage: React.FC<ContactsAddNewFriendErrorMessageProps> = ({searchResult}) => {
    switch (searchResult.status) {
        case SearchResultStatus.INVALID_EMAIL:
            return (
                <>{'Invalid Email'}</>
            );
        case SearchResultStatus.NOT_FOUND:
            return (
                <>{'User not found'}</>
            );
        case SearchResultStatus.SEARCHED_SELF:
            return (
                <>{'You cannot add yourself as friend'}</>
            );
        case SearchResultStatus.ERROR:
            return (
                <>{'Server error'}</>
            );
        default:
            return (
                <>{'Invalid Email'}</>
            );
    }
};

export default ContactsAddNewFriend