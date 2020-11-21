import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import {Sticky} from "react-sticky"
import { Link } from 'react-router-dom';


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

export default function SimpleList({what ,setWhat}) {
  const classes = useStyles();

  const[selected1,setSelected1]=useState(false)
  const[selected2,setSelected2]=useState(false)
  const[selected3,setSelected3]=useState(false)

  useEffect(()=>{
    if(what == "What"){
      setSelected1(true)
      setSelected2(false)
      setSelected3(false)
    }else if(what == "createQ"){
      setSelected1(false)
      setSelected2(false)
      setSelected3(true)
    }else{
      setSelected1(false)
      setSelected2(true)
      setSelected3(false)
    }
  },[what])

  return (
   
    <div className={classes.root}>
      <Sticky>{({ style }) =>( 
        <div style={style}>
          <List  component="nav" aria-label="main mailbox folders" style={{paddingTop: '0px'}}>
            <ListItem button selected={selected1} style={{borderRight:''}} component={Link} to={'/'}>
              <ListItemIcon>
                <HomeIcon style={{color: 'gold'}}/>
              </ListItemIcon>
              <ListItemText primary="Open" />
            </ListItem>
            {/* <Link style={{ textDecoration: 'none' }}> */}
            <ListItem button selected={selected2} component={Link} to={'myquestions'}>
              <ListItemIcon>
                <RecordVoiceOverIcon />
              </ListItemIcon>
              <ListItemText primary="My Subscriptions" />
            </ListItem>
            {/* </Link> */}
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="+ Create Question " onClick={()=>setWhat("createQ")}/>
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List>
        </div>
      )}
      </Sticky>
    </div>
      
  )
}