import React from 'react'
import fetch from 'node-fetch'
import { HyperactivProvider } from 'hyperactiv/src/react'

import { WEB } from '~/shared/constants'
import { http, createStore } from '~/shared/tools'

import { App } from './App'

export function Root({
    pathname,
    store = createStore()
}) {
    let client = WEB ? http : http.polyfills({ fetch })
    return (
        <HyperactivProvider store={store} client={client}>
            <App pathname={pathname} />
        </HyperactivProvider>
    )
}