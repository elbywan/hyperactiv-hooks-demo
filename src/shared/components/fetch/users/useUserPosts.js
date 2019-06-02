import { useResource } from 'hyperactiv/react'

import { store, http } from '../../../tools'

export function useUserPosts(id, options) {
    return useResource('posts', `/posts?userId=${id}`, {
        store,
        client: http,
        normalize: {
            from: {
                users: id
            }
        },
        ...options
    })
}