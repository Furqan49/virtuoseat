import React from 'react'
import {Wrapper} from './Videos.styled'
import {FilterFilled} from '@ant-design/icons';
import {Row, Col} from 'antd';
import ArtistCard from "../../../../components/artistCard/ArtistCard"


export default function IndexPage() {


    const memberData = [
       {
            title: "Britney Spears"
        }, {
            title: "Britney Spears"
        },
    ]

    return (
        <Wrapper>

            <div className='main-container'>

                <div className='video-container'>

                    <div className='topbtn'>
                        <div className='button'>
                            <FilterFilled style={
                                {marginRight: "5px"}
                            }/>
                            Filter
                        </div>
                    </div>


                    <Row gutter={
                        [15, 15]
                    }>
                        {
                        memberData.map(data => {
                            return <Col xs={24}
                                sm={24}
                                md={12}
                                lg={8}
                                xl={6}
                                xxl={4}>
                                <ArtistCard Title={
                                    data.title
                                }/></Col>
                    })
                    } </Row>


                </div>
            </div>

        </Wrapper>
    )
}
