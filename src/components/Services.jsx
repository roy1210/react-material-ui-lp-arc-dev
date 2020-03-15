import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import React from "react"
import { Link } from "react-router-dom"
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppsIcon from "../assets/mobileIcon.svg"
import websitesIcon from "../assets/websiteIcon.svg"
import { Path } from "../constants"
import ButtonArrow from "./ui/ButtonArrow"

const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMatchSM = useMediaQuery(theme.breakpoints.down("sm"))
  const isMatchXS = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Grid container direction="column">

      {/*-----Title-----*/}
      <Grid item style={{ marginLeft: isMatchSM ? 0 : "4em", marginTop: isMatchSM ? "1em" : "2em" }}>
        <Typography
          variant="h2"
          gutterBottom
          align={isMatchSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/*-----iOS/Android Block-----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={isMatchSM ? "center" : "flex-end"}
        >
          <Grid item style={{
            textAlign: isMatchSM ? "center" : undefined,
            width: isMatchSM ? undefined : "34em"
          }}>
            <Typography variant="h4">iOS/Android Development</Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Integrate your web experience or create a standalone app
              {isMatchSM ? null : <br />}
              with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to={Path.MOBILE_APPS}
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1)
                setSelectedIndex(2)
              }}
            >
              <span className={classes.learnButtonSpan}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: isMatchSM ? 0 : "4em" }}>
            <img
              src={mobileAppsIcon}
              alt="mobile app icon"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* ----Custom software section---- */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={isMatchSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: isMatchSM ? 0 : "4em",
              textAlign: isMatchSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to={Path.CUSTOM_SOFTWARE}
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1)
                setSelectedIndex(1)
              }}
            >
              <span className={classes.learnButtonSpan}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="custom software icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Websites Block-----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={isMatchSM ? "center" : "flex-end"}
          style={{ marginBottom: "4em" }}
        >
          <Grid
            item
            style={{
              textAlign: isMatchSM ? "center" : undefined,
              width: isMatchSM ? undefined : "34em"
            }}
          >
            <Typography variant="h4">website Development</Typography>
            <Typography variant="subtitle1">
              Reach More, Discover More, Sell More.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Optimized for Search Engine, build for speed.
            </Typography>
            <Button
              component={Link}
              to={Path.WEBSITES}
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1)
                setSelectedIndex(3)
              }}
            >
              <span className={classes.learnButtonSpan}>Learn More</span>
              <ButtonArrow width={14} height={14} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: isMatchSM ? 0 : "4em" }}>
            <img
              src={websitesIcon}
              alt="custom software icon"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.6rem",
    padding: 4,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
    fontSize: "1.5rem"
  },
  subtitle: {
    marginBottom: "1rem"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      padding: 24,
      marginTop: "1em",
    }
  },
}))
