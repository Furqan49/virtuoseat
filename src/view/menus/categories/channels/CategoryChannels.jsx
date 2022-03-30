import React from 'react'
import CategoryCard from '../../../../components/categoryCard/CategoryCard'
import {Row, Col} from 'antd';
import styledComponents from 'styled-components';


function CategoryChannels() {

    const cardData = [
        {
            title: "Home Decor",
            number: 0,
            category: "Channels"
        }, {
            title: "Personal Finance",
            number: 0,
            category: "Channels"
        }, {
            title: "Relationships",
            number: 0,
            category: "Channels"
        }, {
            title: "Marketing",
            number: 0,
            category: "Channels"
        }, {
            title: "DIY",
            number: 0,
            category: "Channels"
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

export default CategoryChannels

const Wrapper = styledComponents.div `
padding:20px;`
