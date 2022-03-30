import React from 'react'
import CategoryCard from '../../../../components/categoryCard/CategoryCard'
import {Row, Col} from 'antd';
import styledComponents from 'styled-components';


function CategoryVideos() {

    const cardData = [
        {
            title: "Adventure",
            number: 0,
            category: "Videos"
        },
        {
            title: "Art",
            number: 0,
            category: "Videos"
        },
        {
            title: "Business",
            number: 0,
            category: "Videos"
        },
        {
            title: "Home Decor",
            number: 0,
            category: "Videos"
        }, {
            title: "Personal Finance",
            number: 0,
            category: "Videos"
        }, {
            title: "Relationships",
            number: 0,
            category: "Videos"
        }, {
            title: "Marketing",
            number: 0,
            category: "Videos"
        }, {
            title: "DIY",
            number: 0,
            category: "Videos"
        },
        {
            title: "DIY",
            number: 0,
            category: "Videos"
        },
        {
            title: "DIY",
            number: 0,
            category: "Videos"
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

export default CategoryVideos

const Wrapper = styledComponents.div `
padding:20px;`
