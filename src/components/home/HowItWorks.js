import React from 'react'
import Typography from '@material-ui/core/Typography'

function HowItWorks() {
  return (
    <div className='content__HowItWorks'>
      <h2>Create a user account.</h2>
      <Typography paragraph>
        To create a user account, give your email address and create a password,
        or log in with online banking credentials. The user account is for your
        personal use only. No one else is allowed use your account for you. If
        you are not familiar with computers, you should submit a paper
        application instead of applying online.
      </Typography>

      <h2>
        Fill in, pay for and submit your application and visit a service point.
      </h2>
      <Typography paragraph>
        Book an appointment to visit a Finnish embassy or consulate abroad or a
        service point of the Finnish Immigration Service in Finland. The
        deadline for identification at Finnish missions as well as service
        points has been extended until 30 April 2021. Read more from our
        <a href='https://migri.fi/-/tunnistautumisaikaa-edustustoissa-ja-palvelupisteissa-on-pidennetty-30.4.2021-asti?languageId=en_US'>
          <span> customer bulletin.</span>
        </a>
        If you are in Finland when you submit your application, you will find
        further instructions on the pages
        <a href='https://migri.fi/en/booking-an-appointment'>
          <span>Booking an appointment</span>
        </a>
        and
        <a href='https://migri.fi/en/visiting-a-service-point'>
          <span>Visiting a service point.</span>
        </a>
        The processing of your application does not start before you have paid
        the processing fee.
      </Typography>

      <h2>Follow the processing of your application.</h2>
      <Typography paragraph>
        You will receive requests for additional information and the decision on
        your application to your Enter Finland account. You will also get email
        notifications of them. The information you see in Enter Finland is the
        same you would receive from our customer service.
      </Typography>
    </div>
  )
}

export default HowItWorks
