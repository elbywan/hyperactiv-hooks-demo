import React, { memo } from 'react'
import { watch } from 'hyperactiv/src/react'

import './User.scss'

import { Loader, Link, Input } from '../../core'
import { useUser, useUserPosts } from '../../fetch'

function UserDetailsInput({ label, onChange, ...props }) {
    return (
        <div className='User__details-input'>
            <label>
                <Input
                    label={label}
                    placeholder={label}
                    onChange={e => onChange(e.target.value)}
                    { ...props }
                />
            </label>
        </div>
    )
}

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
        <div className='User view__padded-content'>
            <Loader loading={loading} error={error}>
                {
                    user && <>
                        <h2>{ user.name }</h2>

                        <div>
                            <h3>User details</h3>
                            <div>
                                <UserDetailsInput
                                    label='Name'
                                    value={ user.name }
                                    onChange={ name => user.name = name }
                                />
                                <UserDetailsInput
                                    label='Username'
                                    value={ user.username }
                                    onChange={ name => user.username = name }
                                />
                                <UserDetailsInput
                                    label='Email'
                                    value={ user.email }
                                    onChange={ email => user.email = email }
                                />
                                <UserDetailsInput
                                    label='Phone'
                                    value={ user.phone }
                                    onChange={ phone => user.phone = phone }
                                />
                                <UserDetailsInput
                                    label='Website'
                                    value={ user.website }
                                    onChange={ website => user.website = website }
                                />
                                <UserDetailsInput
                                    label='Company'
                                    value={ user.company.name }
                                    onChange={ name => user.company.name = name }
                                />
                            </div>
                            <h3>Posts by this user</h3>
                            <Loader loading={!userPosts || userPostsLoading} error={userPostsError}>
                                <>
                                {
                                    user.posts && user.posts.map(postId => store.posts[postId]).map(post =>
                                        !post ?
                                            null :
                                        <div key={post.id}>
                                            <Link href={`/posts/${post.id}`}>{ post.id } - { post.title }</Link>
                                        </div>
                                    )
                                }
                                </>
                            </Loader>
                            <h3>User JSON representation</h3>
                            <pre>
                                { JSON.stringify(user, null, 2) }
                            </pre>
                        </div>
                    </>
                }
            </Loader>
        </div>
    )
}))
