import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, CardActionArea} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import getUrl from "../../helpers/getUrl";
import getIDToken from "../../helpers/getIDToken";

interface ContactDetail {
    name: string,
    uid: string,
    image: string,
    isFriend: boolean
}

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


interface ContactsDetailProps {
    uid: string
}

const ContactsDetail: React.FC<ContactsDetailProps> = ({uid}) => {
    const classes = useStyles();
    const [contactDetail, setContactDetail] = useState<null | ContactDetail>(null);

    const fetchContactDetail = async () => {
        try {
            const token = await getIDToken();
            const url = getUrl(`search-user-by-uid?uid=${uid}`);
            const res = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await res.json();
            if (json.status === 'ok') {
                const data = json.data;
                setContactDetail({
                    name: data.name,
                    uid: data.uid,
                    image: data.image,
                    isFriend: data.isFriend
                })
            }
        } catch (e) {
            console.log(e)
        }
    };

    const handleAddFriend = async (uid: string) => {
        console.log(uid);
        try {
            const token = await getIDToken();
            const url = getUrl('add-friend');
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({friendUid: uid})
            });
            const json = await res.json();
            if (json.status === 'ok') {
                await fetchContactDetail()
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        if (uid) {
            fetchContactDetail()
        }
    }, [uid]);

    return contactDetail && (
        <Card className={classes.root + ' col-c-c'} elevation={0}>
            <Avatar variant="rounded" alt={contactDetail.name} src={contactDetail.image} className={classes.avatar}/>
            <div className={classes.nameArea}>
                { contactDetail.name }
            </div>
            <CardActions>
                <Button style={{
                    backgroundColor: 'green',
                    color: 'white',
                    fontWeight: 700
                }}
                        onClick={
                            contactDetail.isFriend ? () => false : () => handleAddFriend(contactDetail.uid)
                        }
                >
                    { contactDetail.isFriend? 'Send Message' : 'Add Contact' }
                </Button>
            </CardActions>
        </Card>
    )
};

export default ContactsDetail