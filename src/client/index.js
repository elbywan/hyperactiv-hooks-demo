import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from '../shared/components/Root'

function render () {
    ReactDOM.hydrate(<Root />, document.getElementById('root'))
}
render ()
module.hot.accept(render)
