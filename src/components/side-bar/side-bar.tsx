import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import blueGrey from '@material-ui/core/colors/blueGrey';
import {IUser} from "../../App";
import {Avatar} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: blueGrey[900],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

interface SideBarProps {
    user: IUser
}

const SideBar: React.FC<SideBarProps> = ({user}) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Avatar alt={user.displayName || ''} src={user.photoURL || ''} variant="rounded"/>
            </div>
        </div>
    )
};

export default SideBar