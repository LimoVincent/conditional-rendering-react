import React, { useState } from 'react'

import './dialog.css'
import DialogFunctionality from './DialogFunctionality'

function DialogBankCodes() {
  const [show, setShow] = useState(true)
  return (
    show && (
      <div className='bankcodes'>
        <DialogFunctionality setShow={setShow} btnid='btn-bankcodes' />

        <p>
          If you log in with bank codes and apply for a continued permit, you do
          not necessarily need to visit a service point to identify yourself.
          Read more about secure identification on the
          <a href='http://migri.fi/sv/identifiering'>
            migri.fi/en/identification
          </a>
          website .
        </p>
      </div>
    )
  )
}

export default DialogBankCodes
