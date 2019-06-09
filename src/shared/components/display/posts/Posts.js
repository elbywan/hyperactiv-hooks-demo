import React, { useState, memo } from 'react'
import { watch } from 'hyperactiv/src/react'

import { Link, Loader, Button } from '../../core'
import { usePosts } from '../../fetch'

import './Posts.scss'
import { navigate } from '~/shared/tools'

export const Posts = memo(watch(function Posts () {
    const [ page, setPage ] = useState(1)

    const {
        data: posts,
        refetch,
        loading,
        error
    } = usePosts(page)

    return (
        <>
            <div className='Posts__buttons-bar'>
                <Button onClick={() => navigate('/posts/create')}>
                    + Create
                </Button>
                <Button onClick={refetch}>⟳ Refetch</Button>
                <Button onClick={() => setPage(p => Math.max(1, p-1))}>
                    ◀ Previous page
                </Button>
                <Button onClick={() => setPage(p => p + 1)}>
                    ▶ Next page
                </Button>
            </div>
            <div className='view__padded-content'>
                <Loader loading={loading} error={error}>
                    {
                        () => posts && posts.map(post => post && (
                            <div key={post.id}>
                                <Link href={`/posts/${post.id}`}>
                                    { post.title }
                                </Link>
                            </div>
                        ))
                    }
                </Loader>
                <p>
                    <i>Page {page}</i>
                </p>
            </div>
        </>
    )
}))
