import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '1.5rem',
    },
});

interface ContactsListItemDividerAlphabeticProps {
    title: string
}

const ContactsListItemDividerAlphabetic: React.FC<ContactsListItemDividerAlphabeticProps> = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.root + ' row-c-c'}>
            { title }
        </div>
    )
};

export default ContactsListItemDividerAlphabetic