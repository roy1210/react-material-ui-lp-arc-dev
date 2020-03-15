import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import footerAdornment from "../../assets/Footer Adornment.svg"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import { Path } from '../../constants'
import { Hidden } from '@material-ui/core'
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={2}
              className={classes.gridItem}
            >
              <Grid item className={classes.link}
                component={Link}
                to={Path.ROOT}
                onClick={() => setValue(0)}
              >
                Home
            </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid item className={classes.link}
                component={Link}
                to={Path.SERVICES}
                onClick={() => { setValue(1); setSelectedIndex(0) }}
              >
                Services
          </Grid>
              <Grid item className={classes.link}
                component={Link}
                to={Path.CUSTOM_SOFTWARE}
                onClick={() => { setValue(1); setSelectedIndex(1) }}
              >
                Custom Services Development
            </Grid>
              <Grid item className={classes.link}
                component={Link}
                to={Path.MOBILE_APPS}
                onClick={() => { setValue(1); setSelectedIndex(2) }}
              >
                iOS/Android Development
            </Grid>
              <Grid item className={classes.link}
                component={Link}
                to={Path.WEBSITES}
                onClick={() => { setValue(1); setSelectedIndex(3) }}
              >
                Website Development
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                to={Path.ROOT}
                onClick={() => setValue(2)}
              >
                The Revolution
          </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={Path.REVOLUTION}
                onClick={() => setValue(2)}
              >
                Vision
            </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={Path.REVOLUTION}
                onClick={() => setValue(2)}
              >
                Technology
            </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to={Path.REVOLUTION}
                onClick={() => setValue(2)}
              >
                Process
            </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid item className={classes.link}
                component={Link}
                to={Path.ROOT}
                onClick={() => setValue(3)}
              >
                About Us
            </Grid>
            </Grid>
            <Grid item>
              <Grid item className={classes.link}
                component={Link}
                to={Path.ROOT}
                onClick={() => setValue(3)}
              >
                History
          </Grid>
            </Grid>
            <Grid item>
              <Grid item className={classes.link}
                component={Link}
                to={Path.ROOT}
                onClick={() => setValue(3)}
              >
                Team
          </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>

            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid item className={classes.link}
                component={Link}
                onClick={() => setValue(4)}
              >
                Contact Us
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt="adornment" className={classes.adornment} />
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid item component={"a"} href="https://facebook.com" rel="noopener noreferrer" target="_blank">
          <img src={facebook} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
          <img src={twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://instagram.com" rel="noopener noreferrer" target="_blank">
          <img src={instagram} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "24em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "14em",
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"

  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}))
