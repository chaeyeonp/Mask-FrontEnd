import * as React from "react";
import {Card, CardContent, CardHeader} from '@material-ui/core';
import {Admin, Datagrid, EditButton, List, Resource, TextField} from "react-admin";
import {MemberList} from "./memberTable";
import {UserList} from "./userTable";
import Sample from "./punishCard";
import Lout from './layout'
import {makeStyles} from "@material-ui/core/styles";


const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});

const useStyles = makeStyles({
    root: {
        backgroundColor: 'pink'

    },
    media: {
        height: 140,
    },

    font: {
        fontFamily: 'Sansita Swashed',
        textAlign: "center"
    }

});

export default function Userboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Card>
                <CardHeader/>
                <h1 className={classes.font}>🎅Playdata🎅</h1>
                <CardContent className={classes.content}><Resource name="member" list={Lout}/></CardContent>

            </Card>
        </div>
    );


}
