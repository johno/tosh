import React, { Component } from 'react'

import style from '../style'
import Desktop from './components/Desktop'
import Header from './components/Header'
import Window, { WindowHeader } from './components/Window'
import Progress from './components/Progress'
import Button from './components/Button'
import Textarea from './components/Textarea'
import Input from './components/Input'

class App extends Component {
  render () {
    const { base: { fontFamily } } = style

    return (
      <div style={{fontFamily}} className='ph2 pb3 pb4-m pb6-l'>
        <div className='bb bw2'>
          <div className='measure-wide center pv3 pv4-m pv5-l'>
            <h1 className='f-subheadline-ns'>⊡ tosh</h1>
            <p className='lh-copy measure mid-gray pb2 pb4-m pb4-l'>
              The Lisa is a personal computer introduced by Apple Computer Inc. on January 19, 1983.
              It was one of the first personal computers to offer a graphical user interface (GUI) in a machine aimed at individual business users. <br /><br />
              <a href='https://github.com/johnotander/tosh' className='black link'>Tosh</a> is a UI library that travels back to those humble beginnings.
            </p>
          </div>
        </div>
        <div className='measure-wide center'>
          <h4>Desktop</h4>
          <p className='lh-copy measure mid-gray'>
            The Desktop component provides a retro background.
            It uses a css gradient so it is lightweight.
          </p>
          <pre>&lt;Desktop&gt;...&lt;/Desktop&gt;</pre>
          <Desktop className='w-100 h5' />
          <h4>Window</h4>
          <p className='lh-copy measure mid-gray'>
            The Window component can be used to separate content.
            It looks great when placed within a Desktop component.
          </p>
          <pre>&lt;Window&gt;&lt;WindowHeader&gt;...&lt;/WindowHeader&gt;...&lt;/Window&gt;</pre>
          <Window className='w-100'>
            <WindowHeader children='Window' />
            <p className='lh-copy measure-narrow mid-gray ph2'>
              Wrap content into logical parts with the Window component.
            </p>
          </Window>
        </div>
      </div>
    )
  }
}

export default App
