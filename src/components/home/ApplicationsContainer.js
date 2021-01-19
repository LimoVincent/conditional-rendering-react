import React from 'react'
import './Application.css'
import Application from './Application'
export const ApplicationsContainer = () => {
  const applications = [
    {
      title: 'First residence permit',
      desc:
        'When you do not have a residence permit and you plan to move to Finland.',
      path: 'https://enterfinland.fi/eServices',
    },
    {
      title: 'Extended residence permit',
      desc: 'When your residence permit is about to expire.',
      path: 'https://enterfinland.fi/eServices',
    },

    {
      title: 'Permanent residence permit',
      desc: 'When you want to apply for a permanent residence permit.',
      path: 'https://enterfinland.fi/eServices',
    },

    {
      title: 'Seasonal work',
      desc: ' When you are coming to Finland for seasonal work.',
      path: 'https://enterfinland.fi/eServices',
    },
    {
      title: 'EU citizens and their family members',
      desc:
        'Registrations, certificates and residence cards for EU citizens and their family members.',
      path: 'https://enterfinland.fi/eServices',
    },
    {
      title: 'Finnish citizenship',
      desc: 'Apply for Finnish citizenship.',
      path: 'https://enterfinland.fi/eServices',
    },
    {
      title: 'Brexit',
      desc:
        ' When you are a British citizen or family member and you want to continue to reside in Finland.',

      path: 'https://enterfinland.fi/eServices',
    },
    {
      title: 'Renewing residence permit card or residence card',
      desc:
        'When you want to renew your existing residence permit card or residence card.',
      path: 'https://enterfinland.fi/eServices',
    },
  ]
  return (
    <>
      <h3 style={{ margin: '5%' }}>Choose an application below:</h3>
      <div className='container'>
        {applications.map((app) => (
          <Application app={app} key={app.title} />
        ))}
      </div>
    </>
  )
}
