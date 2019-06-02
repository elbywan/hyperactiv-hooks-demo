import React, { useState } from 'react'

import { navigate, http } from '../../../tools'
import { useStore } from 'hyperactiv/src/react'

function createPost(store, data) {
    return (
        http
            .url('/posts')
            .post(data)
            .json(data => {
                store.posts[data.id] = data
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
