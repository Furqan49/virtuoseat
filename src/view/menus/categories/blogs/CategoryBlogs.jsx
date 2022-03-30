import React from 'react'
import CategoryCard from '../../../../components/categoryCard/CategoryCard'
import {Row, Col} from 'antd';
import styledComponents from 'styled-components';


function CategoryBlogs() {

    const cardData = [
        {
            title: "Adventure",
            number: 0,
            category: "Blogs"
        },
        {
            title: "Art",
            number: 0,
            category: "Blogs"
        },
        {
            title: "Business",
            number: 0,
            category: "Blogs"
        },
        {
            title: "Home Decor",
            number: 0,
            category: "Blogs"
        }, {
            title: "Personal Finance",
            number: 0,
            category: "Blogs"
        }, {
            title: "Relationships",
            number: 0,
            category: "Blogs"
        }, {
            title: "Marketing",
            number: 0,
            category: "Blogs"
        }, {
            title: "DIY",
            number: 0,
            category: "Blogs"
        },
    ]

    return (
        <Wrapper>
            <Row gutter={
                [15, 15]
            }>
                {
                cardData.map(data => {
                    return <Col xs={24}
                        sm={24}
                        md={12}
                        lg={8}
                        xl={6}
                        xxl={4}><CategoryCard title={
                                data.title
                            }
                            number={
                                data.number
                            }
                            category={
                                data.category
                            }/>
                    </Col>
            })
            } </Row>
        </Wrapper>
    )
}

export default CategoryBlogs

const Wrapper = styledComponents.div `
padding:20px;`
