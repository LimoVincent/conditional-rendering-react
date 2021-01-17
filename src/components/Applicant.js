import React from 'react'
import Application from './Application'

function Applicant() {
  const applicant = [
    {
      title: 'You are an employer',
      desc: 'Enter finland for employers',
      moredesc:
        'Use Enter Finland for Employers to follow your employee’s residence permit application, to submit documents or to pay the processing fee on behalf of your employee.',
      path: 'https://enterfinland.fi/eServices',
    },
    {
      title: 'You are counsel or representative',
      desc: ' Enter Finland for counsel or a represenstative',
      moredesc:
        'Use Enter Finland for Counsels and Representatives to act on behalf of your client. You can send additional information to the Finnish Immigration Service, request documents, reply to requests for additional information and follow the status of your client’s application.',
      path: 'https://enterfinland.fi/eServices',
    },
  ]
  return (
    <div className='applicant-container'>
      <h3> You are an employer Enter Finland for Employers</h3>
      {applicant.map((app) => (
        <div className='applicant'>
          <Application app={app} />
        </div>
      ))}
    </div>
  )
}

export default Applicant
