import React from 'react'
import './App.css'
import Appbar from './components/Appbar'
import Content from './components/Content'
import DialogBankCodes from './components/DialogBankCodes'
import Footer from './components/Footer'
import ProblemFixedDialog from './components/ProblemFixedDialog'
import Drawer from './components/Drawer'
import { Divider } from '@material-ui/core'

function App() {
  return (
    <div>
      <div className='app'>
        <Appbar />
        <div className='blue-div'></div>
        {/* <Drawer /> */}
        <DialogBankCodes />
        <ProblemFixedDialog />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App
