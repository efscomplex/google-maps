import React from 'react'
import styled from 'styled-components'

export default function Search() {
    return (
        <div>
            <Input type='text' placeholder='search'/>
        </div>
    )
}

const Input = styled('input')`
    border: 1px solid grey;
    outline: none;
`
