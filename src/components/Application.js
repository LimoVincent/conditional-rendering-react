import { Typography } from '@material-ui/core'
import React from 'react'
import './Application.css'
function Application({ app }) {
  const { title, desc, path, moredesc } = app
  return (
    <div className='application'>
      <a href={path}>
        <h3 className='title'>{title}</h3>
        <Typography paragraph className='desc'>
          {desc}
        </Typography>
      </a>
      {moredesc && (
        <Typography paragraph className='moredesc'>
          {moredesc}
        </Typography>
      )}
    </div>
    // <h1>Application</h1>
  )
}

export default Application
