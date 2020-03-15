import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import React from 'react'
import ButtonArrow from './ButtonArrow'
import background from "../../assets/background.jpg"
import mobileBackground from "../../assets/mobileBackground.jpg"
import { Path } from '../../constants'
import { Link } from 'react-router-dom'

const CallToAction = ({ isMatchSM, setValue }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Grid
      container
      alignItems="center"
      justify={isMatchSM ? "center" : "space-between"}
      className={classes.background}
      direction={isMatchSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: isMatchSM ? 0 : "4em",
          textAlign: isMatchSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21 Century.
            </Typography>
            <Grid
              item
              container
              justify={isMatchSM ? "center" : undefined}
            >
              <Button
                component={Link} to={Path.REVOLUTION}
                variant="outlined"
                className={classes.learnButton}
                onClick={() => setValue(2)}
              >
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item  >
        <Button
          component={Link}
          to={Path.ESTIMATE}
          variant="contained"
          className={classes.estimateButton}
          onClick={() => setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  )
}

export default CallToAction

const useStyles = makeStyles(theme => ({
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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 204,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.4rem",
    marginRight: "4em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}))