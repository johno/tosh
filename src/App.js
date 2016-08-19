import React, { Component } from 'react'

import Header from './components/Header'
import Window, { WindowHeader } from './components/Window'
import Progress from './components/Progress'

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
          <div className='mt3 ml4'>
            <Window>
              <WindowHeader children='About Tosh' />
              <div className='bb pa2'>

              </div>
              <div className='pa2'>
                <div className='dt'>
                  <div className='dtc v-mid' children='Pct Awesome (87%)' />
                  <div className='dtc v-mid w4 pl2'>
                    <Progress value={.87} />
                  </div>
                </div>
              </div>
            </Window>
          </div>
        </div>
      </div>
    )
  }
}

export default App
