import React, { memo } from 'react'
import { watch } from 'hyperactiv/src/react'

import { Link, Loader, Input, TextArea } from '../../core'
import { usePost, useUser } from '../../fetch'

export const Post = memo(watch(function Post({ id }) {

    const { data: post, loading, error } = usePost(id)

    const userId = post && post.userId

    const { data: user, loading: userLoading, error: userError} = useUser(userId, { skip: () => !userId })

    return (
        <div className='view__padded-content'>
            <Loader loading={loading} error={error}>
                <div>
                    <h2>
                        <Input
                            style={{ width: '100%' }}
                            value={post && post.title}
                            onChange={e => post.title = e.target.value}
                            id={post && post.id}
                        />
                    </h2>
                </div>
                <div>
                    <span>By: </span>
                    <Loader loading={!user || userLoading} error={userError}>
                        { () => <Link href={`/users/${userId}`}>{ user.name }</Link> }
                    </Loader>
                </div>
                <p>
                    <TextArea
                        rows={5}
                        value={ post && post.body }
                        onChange={e => post.body = e.target.value}
                    />
                </p>
                <p>
                    {
                        (+id > 1) &&
                        <span>
                            <Link href={`/posts/${+id-1}`}>Previous</Link>
                            &nbsp;
                        </span>
                    }
                    <Link href={`/posts/${+id+1}`}>Next</Link>
                </p>
            </Loader>
        </div>
    )
}))
