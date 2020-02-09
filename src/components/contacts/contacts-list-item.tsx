import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Avatar, Card} from "@material-ui/core";

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
    avatar: {
        width: '30px',
        height: '30px',
    },
    nameArea: {
        width: 'calc(100% - 30px)',
        padding: '0 16px',
        height: '1rem',
        lineHeight: '1rem'
    }
});

export interface ContactsListItemData {
    name: string,
    image: string
}

interface ContactsListItemProps extends ContactsListItemData{
    isActive: boolean,
    handleClickContact: () => void
}

const ContactsListItem: React.FC<ContactsListItemProps> = ({ name, image, isActive, handleClickContact }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0} style={isActive ? {backgroundColor: 'rgb(220, 220, 220)'} : {}}>
            <CardActionArea className={classes.actionArea} onClick={handleClickContact}>
                <Avatar variant="rounded" alt={name} src={image} className={classes.avatar}/>
                <div className={classes.nameArea}>
                    { name }
                </div>
            </CardActionArea>
        </Card>
    )
};

export default ContactsListItem