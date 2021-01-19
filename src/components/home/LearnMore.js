import { Typography } from '@material-ui/core'
import React from 'react'

function LearnMore() {
  const learn_more = [
    {
      learn: 'infofinland.fi',
      more: 'Finland in your language.',
      url: 'https://www.infofinland.fi/ ',
    },
    {
      learn: 'thisisfinland.fi',
      more: 'Information about Finland.',
      url: ' https://finland.fi/',
    },
    {
      learn: 'workinfinland.fi',
      more: 'If you are coming to Finland to work.',
      url:
        ' https://www.businessfinland.fi/en/do-business-with-finland/work-in-finland',
    },
    {
      learn: 'ihhelsinki.fi',
      more: 'International House Helsin',
      url: 'https://ihhelsinki.fi/',
    },
  ]
  return (
    <div className='learnmore'>
      <h4>
        infofinland.fi Finland in your language. thisisfinland.fi Information
        about Finland. workinfinland.fi If you are coming to Finland to work.
        ihhelsinki.fi International House Helsinki.
      </h4>

      {learn_more.map(({ learn, more, url }) => (
        <div className='more'>
          <a href={url}>
            <h5>{learn}</h5>
            <Typography paragraph>{more}</Typography>
          </a>
        </div>
      ))}
    </div>
  )
}

export default LearnMore
