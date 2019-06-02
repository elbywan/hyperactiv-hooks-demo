import { useResource } from 'hyperactiv/src/react'

import { store, http } from '../../../tools'

export function usePost(id, options) {
    return useResource('posts', `/posts/${id}`, {
        id,
        store,
        client: http,
        ...options
    })
}