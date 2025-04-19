// Example of props drilling 

import React from 'react'
import Example2 from './Example2'

const Example = (props) => {
    return (
        <>
            <div>Mai hu Example {props.name}</div>
            <Example2 user={props.name} />
        </>
    )
}

export default Example