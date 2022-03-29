import React from 'react'
import {Row, Col} from 'antd';
import VideoCard from "../../../components/videoCard/VideoCard"
import {PlaySquareOutlined} from '@ant-design/icons';


function RecentVideos() {
    return (
            <div className='video-container'>

                <div className='title-container'>
                    <div className='title'>
                        <PlaySquareOutlined style={
                            {
                                fontSize: '18px',
                                color: "#e91e63"
                            }
                        }/>
                        <h2>
                            Recent Videos
                        </h2>
                    </div>
                    <div className='see-button'>
                        See More
                    </div>
                </div>

                <div>
                    <Row gutter={
                        [15, 15]
                    }>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                        <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={"Umer Anjum - Champagne"}
                                PostedBy={"Christopher Daniel"}
                                Views={"4"}
                                Time={"3 weeks"}/></Col>
                    </Row>
                </div>

            </div>
    )
}

export default RecentVideos
