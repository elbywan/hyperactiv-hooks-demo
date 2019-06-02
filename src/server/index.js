/* eslint-disable no-console */
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { Root } from '~/shared/components/Root'
import { initStore } from '~/shared/tools'

import { preloadData } from './preloadData'
import manifest from '../../dist/parcel-manifest.json'
import pageTemplate from './templates/index.html'

async function renderPage ({ url }) {
  let store = initStore()
  const promises = []
  const jsx = <Root pathname={ url } store={ store } promises={ promises } />
  try {
    await preloadData(jsx, promises)
  } catch(error) {
    /* bad */
    console.error(error)
  }

  const reactHtml = ReactDOMServer.renderToString(jsx)
  return pageTemplate({
    css: '/public' + manifest['style/index.scss'],
    js: '/public' + manifest['index.js'],
    reactHtml,
    store
  })
}

const server = express()
server.use(require('compression')())
server.use('/public', express.static('./dist'))

server.get('*', (req, res) => {
  if(req.url.endsWith('.map') || req.url.endsWith('.ico')) {
    return res.status(404).end()
  }
  renderPage({ url: req.url }).then(html => {
    res.send(html)
  })
})

server.listen(5001, '0.0.0.0', () => {
  console.log('Server listening @ http://0.0.0.0/5001')
})