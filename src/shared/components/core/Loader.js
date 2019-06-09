import React, { Fragment, memo, useState, useEffect, useRef } from 'react'
import { watch } from 'hyperactiv/src/react'

import './Loader.scss'

export const Loader = memo(watch(function Loader({ loading, error, children, text='Loading…', icon = true, delay = 500 }) {
    const [initialDelay, setInitialDelay] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setInitialDelay(true)
        }, delay)
        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) {
        if(!initialDelay)
            return null
        return (
            <div className='loader__spinner'>
                { text }
                { icon && <div className='loader__spinner__icon'></div> }
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

    return <Fragment>{ typeof children === 'function' ? children() : children }</Fragment>
}))
