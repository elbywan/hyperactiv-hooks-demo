import React, { memo } from 'react'
import { watch } from 'hyperactiv/react'

import { Link, Loader } from '../../core'
import { usePost, useUser } from '../../fetch'

export const Post = memo(watch(function Post({ id }) {

    const { data: post, loading, error } = usePost(id)

    const userId = post && post.userId

    const { data: user } = useUser(userId, { skip: () => !userId })

    return (
        <div>
            <div>
                <h3>Post n°{id}</h3>
                <h4>{post && post.title }</h4>
            </div>
            <Loader loading={loading} error={error}>
                <div>
                    {
                        (+id > 1) &&
                        <span>
                            <Link href={`/posts/${+id-1}`}>Previous</Link>
                            &nbsp;
                        </span>
                    }
                    <Link href={`/posts/${+id+1}`}>Next</Link>
                </div>
                { user &&
                    <div>
                        <span>By: </span>
                        <Link href={`/users/${userId}`}>{ user.name }</Link>
                    </div>
                }
                <p>{ post && post.body }</p>
            </Loader>
        </div>
    )
}))
