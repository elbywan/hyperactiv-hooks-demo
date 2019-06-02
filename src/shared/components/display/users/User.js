import React, { memo } from 'react'
import { watch } from 'hyperactiv/src/react'

import { Loader } from '../../core'
import { useUser, useUserPosts } from '../../fetch'

export const User = memo(watch(function User({ id, store }) {
    const {
        data: user,
        loading,
        error
    } = useUser(id)

    const {
        data: userPosts,
        loading: userPostsLoading,
        error: userPostsError
    } = useUserPosts(id)

    return (
        <div>
            <Loader loading={loading} error={error}>
                <h2>User: {user && user.name}</h2>
                <p>{ user && JSON.stringify(user, null, 2) }</p>
            </Loader>
            <Loader loading={!userPosts || userPostsLoading} error={userPostsError}>
                <div>
                    <h3>Posts by this user:</h3>
                    <div>
                    {
                        user && user.posts && user.posts.map(postId => store.posts[postId]).map(post =>
                            !post ?
                                null :
                            <p key={post.id}>
                                {/* { JSON.stringify(post, null, 2) } */}
                                { post.id } - { post.title }
                            </p>
                        )
                    }
                    </div>
                </div>
            </Loader>
        </div>
    )
}))
