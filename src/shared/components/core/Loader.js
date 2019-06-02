import React, { Fragment, memo } from 'react'

export const Loader = memo(function Loader({ loading, error, children }) {
    if(loading) {
        return (
            <div className='loader__spinner'>
                Loading…
            </div>
        )
    }
    if(error) {
        return (
            <div className='loader__error'>
                { error.toString() }
            </div>
        )
    }

    return <Fragment>{ children }</Fragment>
})
