import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, CardActionArea} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        width: '500px',
        height: '500px',
        fontSize: 'inherit',
    },
    avatar: {

    },
    nameArea: {
        fontWeight: 700,
        margin: '32px'
    }
});


interface ContactsDetailCommonProps {
    name: string,
    image: string
}

const ContactsDetailCommon: React.FC<ContactsDetailCommonProps> = ({children, name, image}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root + ' col-c-c'} elevation={0}>
            <Avatar variant="rounded" alt={name} src={image} className={classes.avatar}/>
            <div className={classes.nameArea}>
                { name }
            </div>
            <CardActions>
                {children}
            </CardActions>
        </Card>
    )
};

const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 700
};

interface ContactsDetailFriendProps extends ContactsDetailCommonProps {

}

const ContactsDetailFriend: React.FC<ContactsDetailFriendProps> = ({name, image}) => {
    return (
        <ContactsDetailCommon name={name} image={image}>
            <Button style={{...buttonStyle}}>
                Send Message
            </Button>
        </ContactsDetailCommon>
    )
};

interface ContactsDetailStrangerProps extends ContactsDetailCommonProps {

}

const ContactsDetailStranger: React.FC<ContactsDetailStrangerProps> = ({name, image}) => {
    return (
        <ContactsDetailCommon name={name} image={image}>
            <Button style={{...buttonStyle}}>
                Add Contact
            </Button>
        </ContactsDetailCommon>
    )
};

export {ContactsDetailFriend, ContactsDetailStranger}