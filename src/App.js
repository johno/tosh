import React, { Component } from 'react'

import Desktop from './components/Desktop'
import Header from './components/Header'
import Window, { WindowHeader } from './components/Window'
import Progress from './components/Progress'
import Button from './components/Button'
import Textarea from './components/Textarea'
import Input from './components/Input'

class App extends Component {
  render () {
    return (
      <Desktop style={{minHeight: '100vw'}}>
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
        <div className='mt3 center w-50'>
          <Window>
            <WindowHeader children='About Tosh' />
            <div className='bb pa2'></div>
            <div className='pa2'>
              <div className='dt mb2'>
                <div className='dtc v-mid' children='Pct Awesome (87%)' />
                <div className='dtc v-mid w4 pl2'>
                  <Progress value={.87} />
                </div>
              </div>
              <div className='bt mt2 pt2'>
                <Input placeholder='An input' />
                <div className='pt2'>
                  <Textarea placeholder='A textarea' />
                </div>
                <div className='pt2'>
                  <Button children='Awesome' />
                </div>
              </div>
            </div>
          </Window>
        </div>
      </Desktop>
    )
  }
}

export default App
