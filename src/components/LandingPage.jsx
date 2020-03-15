import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardContent
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import React from "react"
import Lottie from "react-lottie"
import animationData from "../animations/landinganimation/data"
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppsIcon from "../assets/mobileIcon.svg"
import websitesIcon from "../assets/websiteIcon.svg"
import ButtonArrow from "./ui/ButtonArrow"
import revolutionBackground from "../assets/repeatingBackground.svg"
import infoBackground from "../assets/infoBackground.svg"
import CallToAction from "./ui/CallToAction"
import { Path } from "../constants"
import { Link } from "react-router-dom"

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMatchSM = useMediaQuery(theme.breakpoints.down("sm"))
  const isMatchXS = useMediaQuery(theme.breakpoints.down("xs"))

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bring West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button
                  component={Link}
                  to={Path.ESTIMATE}
                  variant="contained"
                  className={classes.estimatedButton}
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to={Path.REVOLUTION}
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => setValue(2)}
                >
                  <span className={classes.learnButtonSpan}>Learn More</span>
                  <ButtonArrow
                    width={14}
                    height={14}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      {/*-----Services Block-----*/}
      {/*-----Custom Software Block-----*/}
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
      {/*-----iOS/Android Block-----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={isMatchSM ? "center" : "flex-end"}
        >
          <Grid item style={{ textAlign: isMatchSM ? "center" : undefined }}>
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
          justify={isMatchSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: isMatchSM ? 0 : "4em",
              textAlign: isMatchSM ? "center" : undefined
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
          <Grid item>
            <img
              src={websitesIcon}
              alt="custom software icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/*---- Revolution Block ----*/}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "Center" }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to={Path.REVOLUTION}
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => setValue(2)}
                  >
                    <span className={classes.learnButtonSpan}>Learn More</span>
                    <ButtonArrow
                      width={14}
                      height={14}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/*----- Information Block -----*/}
      <Grid item>
        <Grid
          container
          direction="row"
          style={{ height: "80em" }}
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{ textAlign: isMatchXS ? "center" : "inherit" }}
            direction={isMatchXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: isMatchXS ? 0 : isMatchSM ? "2em" : "4em" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: isMatchXS ? "10em" : 0 }}
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to={Path.ABOUT}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => setValue(3)}
                  >
                    <span className={classes.learnButtonSpan}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: isMatchXS ? 0 : isMatchSM ? "2em" : "4em",
                textAlign: isMatchXS ? "center" : "right"
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say Hello!{" "}
                  <span role="img" aria-label="waiving hand">
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to={Path.CONTACT}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => setValue(4)}
                  >
                    <span className={classes.learnButtonSpan}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Call To Action Block */}
      <Grid item>
        <CallToAction setValue={setValue} isMatchSM={isMatchSM} />
      </Grid>
    </Grid>
  )
}

export default LandingPage

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "20em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  estimatedButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 44,
    width: 144,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 44,
    width: 144
    // '& span': {
    //   color: "red"
    // }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.6rem",
    padding: 4,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  learnButtonSpan: {
    padding: "0px 4px"
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 24
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 14,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%"
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
}))
