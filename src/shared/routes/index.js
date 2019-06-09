/* eslint-disable react/jsx-key */
import React from 'react'

import { Posts, NewPost, Post } from '../components/display/posts'
import { User } from '../components/display/users'
import { Link } from '../components/core'

import { navigate } from '../tools'

function softRedirect(to) {
    const redirect = routes.find(r => r.path === to)
    if(redirect) {
        navigate(redirect.path)
        return redirect.action()
    }
    return null
}

export const routes = [
    { path: '/posts', action: () => [
        <span>Posts</span>,
        <Posts />
    ]},
    { path: '/posts/create', action: () => [
        <>
            <Link href='/posts'>Posts</Link> › new post
        </>,
        <NewPost />
    ]},
    { path: '/posts/:id', action: ({ params: { id }}) => [
        <>
            <Link href='/posts'>Posts</Link> › post n°{id}
        </>,
        <Post id={ id }/>
    ]},
    { path: '/users/:id', action: ({ params: { id }}) => [
        <>
            <Link href='/posts'>Posts</Link> › user n°{id}
        </>,
        <User id={ id }/>
    ]},
    { path: /.*/, action: () =>
        softRedirect('/posts')
    }
]
