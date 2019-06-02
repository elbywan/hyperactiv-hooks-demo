import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import { Root } from '../shared/components/Root'

const HotRoot = hot(module)(Root)

ReactDOM.render(<HotRoot />, document.getElementById('root'))
