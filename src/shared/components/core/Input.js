import React from 'react'
import './Input.scss'

export function Input({ label, id, ...props }) {
    const inputElt = <input {...props} key={id} />
    return label ?
        <label key={id}>{ label }: { inputElt }</label> :
        inputElt
}
