import React from 'react'
import styled from 'styled-components'

function ProductButton({text, onClick, isActive}) {
    return (
        <Wrapper>
            <div onClick={onClick}
                className={
                    isActive ? "filter-button active" : "filter-button"
            }>
                {text} </div>
        </Wrapper>
    )
}

export default ProductButton

const Wrapper = styled.div `
.filter-button{
padding: 10px 34px;
border-radius:100px;
background: #fff;
width:auto;
display:inline-block;
margin: 0 10px 10px;
font-size: 12px;
font-weight: 700;
}
.active{
    background:#2b5407;
    color:white;
}
.filter-button:hover{
    background:#2b5407;
    color:white;
    cursor:pointer;
}
`
