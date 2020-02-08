import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '50px',
    },
});

interface ContactsListItemDividerAlphabeticProps {
    title: string
}

const ContactsListItemDividerAlphabetic: React.FC<ContactsListItemDividerAlphabeticProps> = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            { title }
        </div>
    )
};

export default ContactsListItemDividerAlphabetic