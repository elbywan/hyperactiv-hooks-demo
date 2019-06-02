import { useResource } from 'hyperactiv/src/react'

import { store, http } from '../../../tools'

export function usePosts(page = 1, limit = 20) {
    return useResource('posts', '/posts', {
        store,
        client: http,
        beforeRequest: client => client.query({
            _page: page,
            _limit: limit
        })
    })
}