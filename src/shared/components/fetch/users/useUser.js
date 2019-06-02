import { useResource } from 'hyperactiv/src/react'

export function useUser(id, options) {
    return useResource('users', `/users/${id}`, {
        id,
        ...options
    })
}