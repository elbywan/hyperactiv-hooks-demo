import React, { useState } from 'react'

import { navigate, http } from '../../../tools'
import { useStore } from 'hyperactiv/src/react'

function createPost(store, payload) {
    return (
        http
            .url('/posts')
            .post(payload)
            .json(data => {
                store.posts[data.id] = data
                const userId = payload.userId
                if(userId && store.users[userId]) {
                    if(store.users[userId].posts)
                        store.users[userId].posts.push(data.id)
                    else
                        store.users[userId].posts = [data.id]
                }
                return data
            })
    )
}

export function NewPost() {
    const store = useStore()
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    async function createNewPost() {
        const data = await createPost(store, { title, body, userId: 10 })
        navigate(`/posts/${data.id}`)
    }

    return (
        <div>
            <div>
                <span>Title : </span>
                <input
                    value={ title }
                    onChange={ e => setTitle(e.target.value) }
                />
            </div>
            <div>
                <span>Body : </span>
                <textarea
                    value={ body }
                    onChange={ e => setBody(e.target.value) }
                />
            </div>
            <div>
                <button
                    disabled={!title || !body}
                    onClick={createNewPost}
                >
                    Create
                </button>
            </div>
        </div>
    )
}
