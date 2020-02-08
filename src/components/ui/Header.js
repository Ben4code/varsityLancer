import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Button  from '@material-ui/core/Button';

import { Link } from 'react-router-dom'
import logo from '../../assets/vl-logo.png'

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
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  logo: {
    height: "3em"
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '20 px'
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/about' && value !== 1) {
      setValue(1)
    }else if (window.location.pathname === '/join' && value !== 2) {
      setValue(2)
    }else if(window.location.pathname === '/dashboard' && value !== 3) {
    setValue(3)
    }
  }, [value])


const handleChange = (e, value) => {
  setValue(value);
}

return (
  <React.Fragment>
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" onClick={()=> setValue(0)}>
            <img className={classes.logo} src={logo} alt="Varsity Lancer Logo" />
          </Link>
          <Tabs indicatorColor="primary" value={value} onChange={handleChange} className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab className={classes.tab} component={Link} to="/about" label="About" />
            <Tab className={classes.tab} component={Link} to="join" label="Join" />
            <Tab className={classes.tab} component={Link} to="dashboard" label="Dashboard" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}></div>
  </React.Fragment>
)

}