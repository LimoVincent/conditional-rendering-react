import React from 'react'
import './App.css'
import Appbar from './components/home/Appbar'
import Content from './components/home/Content'
import Dialogs from './components/home/Dialogs/Dialogs'
import Footer from './components/home/Footer'
// import Drawer from './components/home/home/Drawer'
// import { Divider } from '@material-ui/core'

function App() {
  return (
    <div>
      <div className='app'>
        <Appbar />
        <div className='blue-div'></div>
        {/* <Drawer /> */}
        <Dialogs />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App
