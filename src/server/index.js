/* eslint-disable no-console */
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { preloadData } from 'hyperactiv/src/react'

import { Root } from '~/shared/components/Root'
import { initStore } from '~/shared/tools'

import manifest from '../../dist/client/parcel-manifest.json'
import pageTemplate from './templates/index.html'

async function renderPage ({ url }) {
  let store = initStore()
  const jsx = <Root pathname={ url } store={ store }  />
  try {
    await preloadData(jsx)
  } catch(error) {
    /* bad */
    console.error(error)
  }

  const reactHtml = ReactDOMServer.renderToString(jsx)
  return pageTemplate({
    css:  manifest['style/index.scss'],
    js: Object.entries(manifest).filter(([ key ]) => key.endsWith('.js')).map(([, src ]) => {
      if(src.endsWith('.js.map')) {
        return src.substring(0, src.length - 4)
      } else {
        return src
      }
    }),
    reactHtml,
    store
  })
}

const server = express()
server.use(require('compression')())
server.use('/public/client', express.static('./dist/client'))

server.get('*', (req, res) => {
  if(req.url.endsWith('.map') || req.url.endsWith('.ico')) {
    return res.status(404).end()
  }
  renderPage({ url: req.url }).then(html => {
    res.send(html)
  })
})

const port = process.env.PORT || 5001
server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening @ http://0.0.0.0/${port}`)
})