import { Typography } from '@material-ui/core'
import React from 'react'
import AppFinder from './AppFinder'
import Applicant from './Applicant'
import { ApplicationsContainer } from './ApplicationsContainer'
import AppSteps from './AppSteps'
import HowItWorks from './HowItWorks'
import LearnMore from './LearnMore'
import NonOnlineApplications from './NonOnlineApplications'

function Content() {
  return (
    <div>
      <ApplicationsContainer />
      <AppFinder />
      <Applicant />
      <HowItWorks />
      <NonOnlineApplications />
      <AppSteps />
      <LearnMore />
    </div>
  )
}

export default Content
