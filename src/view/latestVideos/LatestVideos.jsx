import React from 'react'
import {Wrapper} from './LatestVideos.styled'
import {FilterFilled} from '@ant-design/icons';
import {Row, Col} from 'antd';
import VideoCard from "../../components/videoCard/VideoCard"


export default function IndexPage() {


    const videoData = [
        {
            title: "Umer Anjum - Champagne",
            postedBy: "Christopher Daniel",
            views: 4,
            time: "3 weeks"
        },
        {
            title: "Umer Anjum - Champagne",
            postedBy: "Christopher Daniel",
            views: 4,
            time: "3 weeks"
        },
        {
            title: "Umer Anjum - Champagne",
            postedBy: "Christopher Daniel",
            views: 4,
            time: "3 weeks"
        },
        {
            title: "Umer Anjum - Champagne",
            postedBy: "Christopher Daniel",
            views: 4,
            time: "3 weeks"
        },{
            title: "Umer Anjum - Champagne",
            postedBy: "Christopher Daniel",
            views: 4,
            time: "3 weeks"
        }
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
                        videoData.map(data => {
                            return <Col xs={24}
                                sm={24}
                                md={12}
                                lg={8}
                                xl={6}
                                xxl={4}><VideoCard Title={data.title}
                                    PostedBy={data.postedBy}
                                    Views={data.views}
                                    Time={data.time}/></Col>
                    })
                    } </Row>


                </div>
            </div>

        </Wrapper>
    )
}
