import React from 'react'

function AppSteps() {
  const steps = [
    {
      step: '1',
      desc: 'Create a user account.',
    },
    {
      step: 2,
      desc: '  Choose the right application and fill in the form.',
    },
    {
      step: 3,
      desc: 'Add attachments. ',
    },
    {
      step: 4,
      desc: 'Pay the processing fee and submit the application. ',
    },
    {
      step: 5,
      desc: ' Visit a service point.',
    },
  ]

  return (
    <div className='steps'>
      <h5>Five steps and your application is ready</h5>

      {steps.map(({ step, desc }) => (
        <div key={desc} style={{ display: 'flex' }}>
          <h3
            className='step'
            style={{ backgroundColor: '#90e600', borderRadius: '50%' }}
          >
            {step}
          </h3>
          <h3 className='desc'>{desc}</h3>
        </div>
      ))}
    </div>
  )
}

export default AppSteps
