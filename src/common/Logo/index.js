import React from 'react'
import logoImg from './bean-counter-logo.png'
import { withStyles } from 'material-ui/styles'

const styles = {
  logo: {
    width: '30px',
    marginRight: '15px'
  }
}

function Logo(props) {
  const { classes } = props
  return (
    <img
      src={logoImg}
      className={classes.logo}
      alt="Bean Counter logo"
    />
  )
}

export default withStyles(styles)(Logo)
