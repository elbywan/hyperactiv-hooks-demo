import React from 'react'
import fetch from 'node-fetch'
import { HyperactivProvider } from 'hyperactiv/react'

import { WEB } from '~/shared/constants'
import { http } from '~/shared/tools'

import { App } from './App'

export function Root({
    pathname,
    store,
    promises
}) {
    let client = WEB ? http : http.polyfills({ fetch })
    return (
        <HyperactivProvider store={store} client={client} promises={promises}>
            <App pathname={pathname} />
        </HyperactivProvider>
    )
}