import React from 'react';
import App from '../../App';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, responsiveFontSizes } from '@material-ui/core/styles';
import LineGraph from '../Charts/LineGraph';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PieChartRight from '../Charts/PieChartRight';
import Types from '../Charts/Types';
import '../Navigation/drawer.module.css';
import Logo from './unnamed.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'transparent'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'url(http://i.imgur.com/q033YDw.jpg)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      

      
      <List>
      <Router>
        
      <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/HomePage" style={{textDecoration:'none', color:'white'}}>Home</a>
          </ListItem>

          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/Sets" style={{textDecoration:'none', color:'white'}}>Sets</a>
          </ListItem>
       

       
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/Qualities" style={{textDecoration:'none', color:'white'}}>Qualities</a>
          </ListItem>
          

         
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/Types" style={{textDecoration:'none', color:'white'}}>Types</a>
          </ListItem>
          

          
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/Factions" style={{textDecoration:'none', color:'white'}}>Factions</a>
          </ListItem>
          

        
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/Classes" style={{textDecoration:'none', color:'white'}}>Classes</a>
          </ListItem>
       

       
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <a href="http://localhost:3000/Races" style={{textDecoration:'none', color:'white'}}>Races</a>
          </ListItem>
          
          </Router>
      </List>
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            

            <img src={Logo} style={{height:"80px", width:"99px", marginLeft:"1530%", marginTop:"30%"}}/>


          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          
        </Typography>
        <Typography paragraph>
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;