import { useResource } from 'hyperactiv/src/react'

import { store, http } from '../../../tools'

export function useUser(id, options) {
    return useResource('users', `/users/${id}`, {
        id,
        store,
        client: http,
        ...options
    })
}