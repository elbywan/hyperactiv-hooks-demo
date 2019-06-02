import { store } from 'hyperactiv/src/react'
import { WEB } from '../constants'

export function initStore() {
    return {
        posts: {},
        users: {}
    }
}

export function createStore() {
    return store(WEB && window.__STORE__ || initStore())
}

