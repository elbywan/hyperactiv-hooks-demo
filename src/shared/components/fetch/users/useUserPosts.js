import { useResource } from 'hyperactiv/src/react'

export function useUserPosts(id, options) {
    return useResource('posts', `/posts?userId=${id}`, {
        normalize: {
            from: {
                users: id
            }
        },
        ...options
    })
}