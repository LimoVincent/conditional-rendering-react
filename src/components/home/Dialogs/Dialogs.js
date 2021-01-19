import React from 'react'
import Cookies from './Cookies'
import DialogBankCodes from './DialogBankCodes'
import DialogUpdate from './DialogUpdate'
import ProblemFixedDialog from './ProblemFixedDialog'

function Dialogs() {
  return (
    <div>
      <Cookies/>
      <ProblemFixedDialog />
      <DialogBankCodes />
      <DialogUpdate />
    </div>
  )
}

export default Dialogs
