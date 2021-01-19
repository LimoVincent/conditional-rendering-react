import React from 'react'
import { Grid, GridList, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import migri_logo_white from './../../img/migri_logo_white.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
  img: {
    height: 'auto',
    weidth: '1px',
  },
}))
function Footer() {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6}>
        <Typography variant='h6' color='initial'>
          <a href=''>Terms of use</a>
        </Typography>
        <Typography variant='h6' color='initial'>
          {' '}
          <a href=''>Kakor</a>
        </Typography>
        <Typography variant='h6' color='white'>
          {' '}
          <a href=''>Accessibility statement</a>
        </Typography>
        <Typography variant='h6' color='white'>Finnish immigration eservice 2021</Typography>
      </Grid>
      <Grid item xs={2}>
        <img
          src={migri_logo_white}
          alt='migri_logo_white'
          className={classes.img}
        />
      </Grid>
    </Grid>
  )
}

export default Footer
