import { useResource } from 'hyperactiv/src/react'

export function usePost(id, options) {
    return useResource('posts', `/posts/${id}`, {
        id,
        ...options
    })
}