import React, { useState } from 'react'

import './dialog.css'
import DialogFunctionality from './DialogFunctionality'

function DialogUpdate() {
  const [show, setShow] = useState(true)
  return (
    show && (
      <div className='update'>
        <DialogFunctionality setShow={setShow} btnid='btn-update' />
        <p>
          <strong> Attention! </strong>
          The Enter Finland e-service is being updated on 19th of January. The
          service will be closed at 18:00 on 19.01.2021 and will open again on
          20.01.2021 00:00 EET. We apologize for the inconvenience.
        </p>
      </div>
    )
  )
}

export default DialogUpdate
