import React, { memo } from 'react'

import './Link.scss'
import { navigate } from '../../tools'

export const Link = memo(function Link({ href, children, replaceState = false }) {
    return (
        <a className='link' href={href} onClick={ e => {
            e.preventDefault()
            navigate(href, replaceState)
        }}>
            { children }
        </a>
    )
})
