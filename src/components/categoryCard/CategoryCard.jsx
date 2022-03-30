import React from 'react'
import styledComponents from 'styled-components'
import CategoryImage from "../../assets/images/categoryImage.jpeg"

function CategoryCard({title,number,category}) {
  return (
    <Wrapper>
        <div className="categoryBox">
            <img src={CategoryImage} alt="" className='coverImage'/>
            <div className="details">
                <h2>
                    {title}
                </h2>
                <p>
                    {number}{" "}{category}
                </p>
            </div>
        </div>
    </Wrapper>
  )
}

export default CategoryCard

const Wrapper = styledComponents.div`

.categoryBox{
    background: #000;
    border-radius:15px;
}
.coverImage{
    width:100%;
    height:100%;
    opacity: 0.5;
    border-radius:15px;
}
.details{
    display:flex;
    align-items:center;
    flex-direction:column;
    position:relative;
    justify-content:center;
    top: -96px;
    height: 0;

    h2{
        color:white;
    }
    p{
        color:white;
    }
}
`