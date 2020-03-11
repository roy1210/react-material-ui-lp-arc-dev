import { IconButton, SwipeableDrawer, useMediaQuery, useScrollTrigger, List, ListItem, ListItemText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
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


const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  // Memo: e.currentTarget: Class
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const [openMenu, setOpenMenu] = useState(false)
  // memo: value: index
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const menuOptions = [
    { name: "Services", link: Path.SERVICES, activeIndex: 1, selectedIndex: 0 },
    { name: 'Custom Software Development', link: Path.CUSTOM_SOFTWARE, activeIndex: 1, selectedIndex: 1 },
    { name: "Mobile APP Development", link: Path.MOBILE_APPS, activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", link: Path.WEBSITES, activeIndex: 1, selectedIndex: 3 }
  ]

  const routes = [
    { name: "Home", link: Path.ROOT, activeIndex: 0 },
    {
      name: 'Services',
      link: Path.SERVICES,
      activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: Path.REVOLUTION, activeIndex: 2 },
    { name: "About US", link: Path.ABOUT, activeIndex: 3 },
    { name: "Contact US", link: Path.CONTACT, activeIndex: 4 }
  ]


  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes])

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        indicatorColor="primary"
        onChange={handleChange}
        value={value}
      >
        {routes.map((route) => (
          <Tab
            key={`${route.name}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        // Memo: For SEO
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            onClick={(event) => {
              handleMenuItemClick(event, i)
              setValue(1)
              handleClose()
            }}
            selected={i === selectedIndex && value === 1}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolBarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem
              key={`${route.name}`}
              onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(5) }}
            divider
            button
            component={Link}
            to={Path.ESTIMATE}
            className={classes.drawerItemEstimate}
            selected={value === 5}
            classes={{ root: classes.drawerItemEstimated, selected: classes.drawerItemSelected }}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link} to={Path.ROOT}
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </React.Fragment>

  )
}

export default Header

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down('md')]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down('md')]: {
      height: "7em"
    },
    [theme.breakpoints.down('xs')]: {
      height: "5.5em"
    }
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
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemSelected: {
    "& . MuiListItemText-root": {
      opacity: 1
    }
  },

  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}))