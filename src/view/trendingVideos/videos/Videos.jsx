import React from 'react'
import {Row, Col} from 'antd';
import VideoCard from "../../../components/videoCard/VideoCard"
import {FilterFilled} from '@ant-design/icons';


function RecentVideos() {

    const videoData = [
        {
            title: 'Umer Anjum - Champagne',
            postedBy: 'Christopher Daniel',
            views: 32,
            time: '3 weeks'
        }, {
            title: 'Umer Anjum - Champagne',
            postedBy: 'Christopher Daniel',
            views: 32,
            time: '2 weeks'
        }, {
            title: 'Umer Anjum - Champagne',
            postedBy: 'Christopher Daniel',
            views: 32,
            time: '2 weeks'
        },
    ];

    console.log(videoData)

    return (
        <div> {
            videoData.length > 5 ? <div className='video-container'>
                <div className='topbtn'>
                    <div className='button'>
                        <FilterFilled style={{marginRight:"5px"}}/>
                        Filter
                    </div>
                </div>

                <Row gutter={
                    [15, 15]
                }>
                    {
                    videoData.map(item => {
                        return <Col xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}><VideoCard Title={
                                    item.title
                                }
                                PostedBy={
                                    item.postedBy
                                }
                                Views={
                                    item.views
                                }
                                Time={
                                    item.time
                                }/>
                        </Col>
                })
                } </Row>
            </div> : <div className='note'>
                <span>
                    No video found with your matching criteria.</span>
            </div>
        } </div>
    )
}

export default RecentVideos
