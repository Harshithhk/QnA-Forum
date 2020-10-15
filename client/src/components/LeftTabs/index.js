import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import {Sticky} from "react-sticky"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <Sticky>{({ style }) =>( <div style={style}>
      <List  component="nav" aria-label="main mailbox folders">
        <ListItem button selected>
          <ListItemIcon>
            <HomeIcon style={{color: 'gold'}}/>
          </ListItemIcon>
          <ListItemText primary="Open" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RecordVoiceOverIcon />
          </ListItemIcon>
          <ListItemText primary="My Questions" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
      </div>
      )}
      </Sticky>
    
    </div>
      
  );
}