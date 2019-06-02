import { useResource } from 'hyperactiv/src/react'

export function usePosts(page = 1, limit = 20) {
    return useResource('posts', '/posts', {
        beforeRequest: client => client.query({
            _page: page,
            _limit: limit
        })
    })
}