import React from 'react'
import styledComponents from 'styled-components'
import mobile from "../../assets/images/mobile.jpg"

function ProductCard({title, price, soldBy}) {
    return (
        <Wrapper>
            <div className="product-contianer">
                <div>
                    <img src={mobile}
                        className="image"/>
                </div>
                <p className='title'>
                    {title} </p>
                <p className='price'>
                    {
                    `$ ${price}`
                } </p>
                <div className='soldBy'>
                    <span>Sold by:{' '} </span>
                    <p>{soldBy} </p>
                </div>

            </div>

        </Wrapper>
    )
}

export default ProductCard

const Wrapper = styledComponents.div `
.product-contianer{
  cursor:pointer;
}
.image{
  width:100%;
  height:100%;
}
.soldBy{
  display:flex;
  align-items:center;
  span{
    color:white;
    margin-right:5px;
    font-size:12px;
  }
}
p{
  color:white;
  padding:0px;
  margin:0px;
}
.price{
  font-size:16px;
  font-weight:bold;
}
.title{
  margin-top:5px;
}
`
