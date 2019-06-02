import { useResource } from 'hyperactiv/react'

import { store, http } from '../../../tools'

export function usePost(id, options) {
    return useResource('posts', `/posts/${id}`, {
        id,
        store,
        client: http,
        ...options
    })
}