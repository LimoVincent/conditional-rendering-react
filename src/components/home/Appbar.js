import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import logo from './../../img/ef_logo.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'primary',
    position: "sticky"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image: {
    height: '40px',
    width: 'auto',
    marginLeft: '20px',
  },
  toolbar: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
}))

export default function Appbar() {
  const classes = useStyles()

  return (
    <div>
      <AppBar className={classes.root} position='sticky'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            
            className={classes.menuButton}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            English | Suomi | Swedish
          </Typography>
          <Typography>Sign in</Typography>
          <Typography variant='body2' color='initial'>
            <img src={logo} alt='enterfinland logo' className={classes.image} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
