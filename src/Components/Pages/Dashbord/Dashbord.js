import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
  Outlet,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import useAuth from '../../../Hooks/useAuth';
import './Dashbord.css';

const drawerWidth = 240;

const Dashbord = (props) => {

  const {admin,LogOut,user} = useAuth();
  console.log("admin data in dashbord ",admin);
  
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          <ul className="list-group fw-bold text-nowrap">
           
          <li> <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}} to="/home"> <i className="fas fa-home"></i> Home</NavLink> </li>
          <br/>
          {
            !admin &&<>
          
         <li> <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}}  to="/dashbord/myResult"> <i className="fas fa-folder-plus"></i> My Results</NavLink> </li>
          <br/>
          <li> <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}}  to="/TakeTest"> <i className="fas fa-folder-plus"></i> Retake Quiz </NavLink> </li>
          <br/>
            </>
          }
         { admin && <>
        <li> <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}}  to="/dashbord/makeAdmin"> <i className="fas fa-user-shield"></i> Make Admin</NavLink> </li>
          <br/>
          <li> <NavLink activeClassName="active-navlink" className="fw-bold "  style={{textDecoration:'none',color:'black'}} to="/dashbord/viewUsers"> <i className="fas fa-users"></i> View Users </NavLink> </li>
          <br/> 
          <li> <NavLink activeClassName="active-navlink" className="fw-bold "  style={{textDecoration:'none',color:'black'}} to="/dashbord/viewQuestion"> <i className="fas fa-users"></i> View Questions </NavLink> </li>
          <br/> 
          <li> <NavLink activeClassName="active-navlink" className="fw-bold "  style={{textDecoration:'none',color:'black'}} to="/dashbord/addQuestion"> <i className="fas fa-users"></i> Add Question </NavLink> </li>
          <br/> 
          
          </> }
          <br/>
         <li> <button className="btn btn-danger" onClick={LogOut}> LogOut </button> </li>
          </ul>
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashbord for {admin?
              <>{user.displayName.toUpperCase()} (Logged As Admin)</>
              :
              <>{user.displayName.toUpperCase()} </>
            }
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
      
              <Outlet/>
        
        </Box>
      </Box>
    );
  }
  
  Dashbord.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashbord;