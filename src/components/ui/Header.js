import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import { Link } from 'react-router-dom'
import logo from '../../imgs/logo-header.png'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  logo: {
    width: "15%",
    marginLeft: "7rem",
    [theme.breakpoints.down("md")]: {
      height: '3em'
    },
    [theme.breakpoints.down("xs")]: {
      height: '2em'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '20px'
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    fontSize: "1.5rem"
  },
  menuItem: {
    fontSize: '1.5rem',
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "30px",
    width: "30px"
  },
  drawerIconContainer: {
    color: "#fff",
    marginLeft: 'auto',
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    color: 'white',
    padding: "1rem 4rem",
    opacity: 0.7
  },
  drawerItemSelected: {
    opacity: 1
  }
}))

export default function Header(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false)
  }

  const menuOptions = [
    { name: 'As Developer', link: '/as-dev' },
    { name: 'As Client', link: '/as-client' }
  ]

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }


  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
      setSelectedIndex(0)
    } else if (window.location.pathname === '/about' && value !== 1) {
      setValue(1)
      setSelectedIndex(1)
    } else if (window.location.pathname === '/join' && value !== 2) {
      setValue(2)
      setSelectedIndex(2)
    } else if (window.location.pathname === '/as-dev' && value !== 2) {
      setValue(2)
      setSelectedIndex(2)
    } else if (window.location.pathname === '/as-client' && value !== 2) {
      setValue(2)
      setSelectedIndex(2)
    } else if (window.location.pathname === '/dashboard' && value !== 3) {
      setValue(3)
      setSelectedIndex(3)
    }
  }, [value])


  const handleChange = (e, value) => {
    setValue(value);
  }

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS}
        disableDiscovery={iOS} open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}>
        <List disablePadding>
          <ListItem divider button disableRipple 
            onClick={()=> {setOpenDrawer(false); setValue(0)}} selected={value === 0} component={Link} to="/" >
            <ListItemText disableTypography className={value === 0 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem } >Home</ListItemText>
          </ListItem>
          <ListItem divider button disableRipple onClick={()=> {setOpenDrawer(false); setValue(1)}} selected={value === 1} component={Link} to="/about" >
            <ListItemText disableTypograph className={value === 1 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem }>About</ListItemText>
          </ListItem>
          <ListItem divider button disableRipple onClick={()=> {setOpenDrawer(false); setValue(2)}} selected={value === 2} component={Link} to="/join" >
            <ListItemText disableTypography className={value === 2 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem }>Join</ListItemText>
          </ListItem>
          <ListItem divider button disableRipple onClick={()=> {setOpenDrawer(false); setValue(3)}} selected={value === 3} component={Link} to="/dashboard">
            <ListItemText disableTypography className={value === 3 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem }>Dashboard</ListItemText>
          </ListItem>

        </List>
      </SwipeableDrawer>
      <IconButton right className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  const tabs = (
    <React.Fragment>
      <Tabs indicatorColor="primary" value={value} onChange={handleChange} className={classes.tabContainer}>
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        
        <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={e => handleClick(e)}
          className={classes.tab} component={Link} to="join" label="Join" />
        <Tab className={classes.tab} component={Link} to="dashboard" label="Dashboard" />
      </Tabs>

      <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }} elevation={0}>
        {menuOptions.map((option, i) => (
          <MenuItem key={option.name} component={Link} to={option.link} classes={{ root: classes.menuItem }} onClick={(e) => { handleMenuItemClick(e, i); setValue(2); handleClose() }} selected={i === selectedIndex}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/" onClick={() => setValue(0)}>
              <img className={classes.logo} src={logo} alt="Varsity Lancer Logo" />
            </Link>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  )

}