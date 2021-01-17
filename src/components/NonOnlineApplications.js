import React from 'react'
import Background from './../img/red_cross_opaque.png'
import Typography from '@material-ui/core/Typography'
function NonOnlineApplications() {
  return (
    <div className=''>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '400px 500px',
        }}
      >
        <h3>residence permit on the basis of Finnish origin</h3>
        <h3>Residence permit on other grounds </h3>
        <h3>Extended permit on the international protection </h3>
        <h3>Travel documents</h3>
        <h3>Schegen Visa</h3>
        <h3>Asylum</h3>
      </div>

      <Typography paragraph>
        For further information, see the website of the Finnish Immigration
        Service or the website of the Finnish Ministry for Foreign Affairs.
        <a href='http://www.migri.fi/en/home'> migri.fi </a> |{' '}
        <a href='https://um.fi/frontpage'> um.fi</a>
      </Typography>
    </div>
  )
}

export default NonOnlineApplications
