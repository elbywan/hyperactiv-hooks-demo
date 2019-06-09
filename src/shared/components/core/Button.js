import React from 'react'
import './Button.scss'

export function Button({ children, ...props }) {
    return <button {...props}>{ children }</button>
}