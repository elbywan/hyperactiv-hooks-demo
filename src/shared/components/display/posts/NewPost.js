import React, { useState } from 'react'

import { navigate, http, store } from '../../../tools'

function createPost(data) {
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
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    async function createNewPost() {
        const data = await createPost({ title, body, userId: 10 })
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
