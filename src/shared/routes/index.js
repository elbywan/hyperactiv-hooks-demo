import React from 'react'

import { Posts, NewPost, Post } from '../components/display/posts'
import { User } from '../components/display/users'

import { redirect } from '../tools'

export const routes = [
    { path: '/posts', action: () => <Posts /> },
    { path: '/posts/create', action: () => <NewPost /> },
    { path: '/posts/:id', action: ctx => <Post id={ ctx.params.id }/> },
    { path: '/users/:id', action: ctx => <User id={ ctx.params.id }/> },
    { path: /.*/, action: () => {
        redirect('/posts')
        return routes[0].action()
    } },
]
