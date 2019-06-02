import { store as createStore } from 'hyperactiv/src/react'
import { WEB } from '../constants'

export function initStore() {
    return {
        posts: {},
        users: {}
    }
}

export const store = createStore(WEB && window.__STORE__ || initStore())

