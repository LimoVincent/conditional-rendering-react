import { Box, DialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

function DialogFunctionality({ setShow, btnid }) {
  return (
    <Box display='flex' alignItems='center'>
      <Box flexGrow={1}></Box>
      <CloseIcon id={btnid} onClick={() => setShow(false)} />
    </Box>
  )
}
export default DialogFunctionality
