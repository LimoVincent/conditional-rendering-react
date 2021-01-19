import { Typography } from '@material-ui/core'
import React, { useState } from 'react'

function Cookies() {
  const [show, setShow] = useState(true)
  return (
    show && (
      <div className='cookies'>
        <Typography paragraph>
          EnterFinland.fi uses cookies. By using this site you consent to our
          use of cookies.
          <a href='https://enterfinland.fi/eServices/info/cookies'>
            Find out more about cookies.
          </a>
        </Typography>

        <button
          className='btn-cookies'
          onClick={() => setShow(false)}
          type='submit'
        >
          I UNDERSTAND
        </button>
      </div>
    )
  )
}

export default Cookies
