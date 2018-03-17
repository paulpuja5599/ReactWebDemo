import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Main from '../src/components/Main'
import Details from '../src/components/Details'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      drawerOpen : false,
    }
  }

  toggleDrawer = () => {
    if(this.state.drawerOpen){
      this.setState({drawerOpen:false});
    } else {
      this.setState({drawerOpen:true});
    }
  }
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer} >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Welcome to React Web Demo
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
            style={{width:300}}
          >
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/details" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
