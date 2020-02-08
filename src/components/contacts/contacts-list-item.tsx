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

interface ContactsListProps {
    data: ContactsListItemData,
    isActive: boolean,
    setActive: () => void
}

const ContactsListItem: React.FC<ContactsListProps> = ({ data, isActive, setActive }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0} style={isActive ? {backgroundColor: 'rgb(220, 220, 220)'} : {}}>
            <CardActionArea className={classes.actionArea} onClick={setActive}>
                <Avatar variant="rounded" alt={data.name} src={data.image} className={classes.avatar}/>
                <div className={classes.nameArea}>
                    { data.name }
                </div>
            </CardActionArea>
        </Card>
    )
};

export default ContactsListItem