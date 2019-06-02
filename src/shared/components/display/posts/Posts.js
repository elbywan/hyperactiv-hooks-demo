import React, { useState, memo } from 'react'
import { watch } from 'hyperactiv/react'

import { Link, Loader } from '../../core'
import { usePosts } from '../../fetch'

export const Posts = memo(watch(function Posts () {
    const [ page, setPage ] = useState(1)

    const {
        data: posts,
        refetch,
        loading,
        error
    } = usePosts(page)

    return (
        <div>
            <h2>Posts</h2>
            <p>
                <Link href='/posts/create'>Create</Link>
            </p>
            <Loader loading={loading} error={error}>
                {
                    posts && posts.map(post => (
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
            <p>
                <button onClick={refetch}>Refetch</button>
                <button onClick={() => setPage(p => Math.max(1, p-1))}>
                    Fetch previous page
                </button>
                <button onClick={() => setPage(p => p + 1)}>
                    Fetch next page
                </button>
            </p>
        </div>
    )
}))
