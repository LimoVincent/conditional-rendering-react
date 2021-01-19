import React, { useState } from 'react'
import './dialog.css'
import DialogFunctionality from './DialogFunctionality'

function ProblemFixedDialog() {
  const [show, setShow] = useState(true)
  return (
    show && (
      <div className='fixed'>
        <DialogFunctionality setShow={setShow} btnid='btn-fixed' />
        <p>
          The problem with signing in to the online service Enter Finland has
          been fixed. You can now sign in to the service with your online
          banking credentials again. Sign in to Enter Finland with the{' '}
          <strong>latest version</strong>of your web browser. If you are still
          unable to sign in to the service, please use one of the following
          browsers to sign in:{' '}
          <strong>
            Google Chrome, Microsoft Edge, Mozilla Firefox, Opera or Safari.
          </strong>
        </p>
      </div>
    )
  )
}

export default ProblemFixedDialog
