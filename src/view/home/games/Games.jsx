import React from 'react'
import {Row, Col} from 'antd';
import VideoCard from "../../../components/videoCard/VideoCard"
import {GroupOutlined} from '@ant-design/icons';


function Games() {
    return (
        <div className='video-container'>

            <div className='title-container'>
                <div className='title'>
                    <GroupOutlined style={
                        {
                            fontSize: '18px',
                            color: "#e91e63"
                        }
                    }/>
                    <h2>
                        Games
                    </h2>
                </div>
                {/* <div className='see-button'>
                        See More
                    </div> */} </div>

            <div>
                <Row gutter={
                    [15, 15]
                }>
                    <Col xs={24}
                        sm={24}
                        md={12}
                        lg={8}
                        xl={6}
                        xxl={4}><VideoCard Title={"1630261083016_Tour-Test-File"}
                            PostedBy={"James Dutrow"}
                            Views={"147"}
                            Time={"4 months ago"}/></Col>
                    <Col xs={24}
                        sm={24}
                        md={12}
                        lg={8}
                        xl={6}
                        xxl={4}><VideoCard Title={"1630261083016_Tour-Test-File"}
                            PostedBy={"James Dutrow"}
                            Views={"147"}
                            Time={"4 months ago"}/></Col>

                </Row>
            </div>
        </div>
    )
}

export default Games
