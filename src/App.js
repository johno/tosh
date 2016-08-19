import React, { Component } from 'react'

import Header from './components/Header'
import Window, { WindowHeader } from './components/Window'

class App extends Component {
  render () {
    return (
      <div style={{minHeight: '100vw'}}>
        <Header />
        <div className='mt4 ml3 w-60'>
          <Window>
            <WindowHeader children='Tosh' />
            <div className='bb pa2'>
              January 19, 1983
            </div>
            <p className='measure pa2'>
              The Lisa is a personal computer introduced by Apple Computer Inc. on January 19, 1983.
              It was one of the first personal computers to offer a graphical user interface (GUI) in a machine aimed at individual business users.
            </p>
          </Window>
        </div>
      </div>
    )
  }
}

export default App
