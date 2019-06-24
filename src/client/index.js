import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from '../shared/components/Root'


ReactDOM.hydrate(<Root />, document.getElementById('root'))
