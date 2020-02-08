import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Card} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '80px',
        fontSize: 'inherit',
        borderRadius: 0
    },
    actionArea: {
        width: '100%',
        padding: '0 16px',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 'inherit'
    },
    icon: {
        width: '30px',
        height: '30px',
        borderRadius: '5px'
    },
    nameArea: {
        width: 'calc(100% - 30px)',
        padding: '0 16px',
        height: '1rem',
        lineHeight: '1rem'
    }
});

interface ContactsListItemNewFriendProps {
    title: string,
    color: string,
    backgroundColor: string
}

const ContactsListItemNewFriend: React.FC<ContactsListItemNewFriendProps> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0}>
            <CardActionArea className={classes.actionArea}>
                <div className={classes.icon + ' row-c-c'} style={{color: props.color, backgroundColor: props.backgroundColor}}>
                    { props.children }
                </div>
                <div className={classes.nameArea}>
                    { props.title }
                </div>
            </CardActionArea>
        </Card>
    )
};

export default ContactsListItemNewFriend