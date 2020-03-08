import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Path } from '../../constants';


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "8em"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "24px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "24px",
    height: "44px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}))

export default function Header(props) {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  // memo: value: index
  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    if (window.location.pathname === Path.ROOT && value !== 0) {
      setValue(0)
    }
    else if (window.location.pathname === Path.SERVICES && value !== 1) {
      setValue(1)
    }
    else if (window.location.pathname === Path.REVOLUTION && value !== 2) {
      setValue(2)
    }
    else if (window.location.pathname === Path.ABOUT && value !== 3) {
      setValue(3)
    }
    else if (window.location.pathname === Path.CONTACT && value !== 4) {
      setValue(4)
    }
    else if (window.location.pathname === Path.ESTIMATE && value !== 5) {
      setValue(5)
    }
  }, [value])

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link} to={Path.ROOT}
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>

            <Tabs
              className={classes.tabContainer}
              indicatorColor="primary"
              onChange={handleChange}
              value={value}
            >
              <Tab className={classes.tab} component={Link} to={Path.ROOT} label="Home" />
              <Tab className={classes.tab} component={Link} to={Path.SERVICES} label="Services" />
              <Tab className={classes.tab} component={Link} to={Path.REVOLUTION} label="The Revolution" />
              <Tab className={classes.tab} component={Link} to={Path.ABOUT} label="About Us" />
              <Tab className={classes.tab} component={Link} to={Path.CONTACT} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to={Path.ESTIMATE}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </React.Fragment>

  )
}
