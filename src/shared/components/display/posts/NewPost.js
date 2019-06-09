import React, { useState } from 'react'

import { navigate, http } from '../../../tools'
import { useStore } from 'hyperactiv/src/react'
import { Input, TextArea, Button, Loader } from '../../core'

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
    const [ creating, setCreating ] = useState(false)
    const [ error, setError ] = useState(null)

    async function createNewPost() {
        setCreating(true)
        try {
            const data = await createPost(store, { title, body, userId: 10 })
            setError(null)
            navigate(`/posts/${data.id}`)
        } catch (error) {
            setError(error)
        }
        setCreating(false)
    }

    return (
        <div className='view__padded-content'>
            <h3>Title</h3>
            <Input
                placeholder='Post title'
                value={ title }
                onChange={ e => setTitle(e.target.value) }
            />
            <h3>Body</h3>
            <TextArea
                placeholder='Post contents'
                rows={10}
                value={ body }
                onChange={ e => setBody(e.target.value) }
            />
            <p>
                 { error && <strong>Error: {error.message}</strong>}
            </p>
            <p>
                <Button
                    disabled={creating || !title || !body}
                    onClick={createNewPost}
                >
                    <Loader text='Creating post' icon={false} loading={creating}>Create</Loader>
                </Button>
            </p>
        </div>
    )
}
