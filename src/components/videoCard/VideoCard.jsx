import React from 'react';
import {Wrapper} from './VideoCard.styled';
import videothumb from "../../assets/images/videothumb.jpg"
import {
    MoreOutlined,
    DislikeOutlined,
    LikeOutlined,
    HeartOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';

import {useHistory} from "react-router-dom"


export default function IndexPage({Title, PostedBy, Views, Time}) {

    const history = useHistory();   

    return (
        <Wrapper>

            <div className="video-card">

                <div className='video-thumb'>

                    <img src={videothumb}/>
                    <div className='video-play-icon'>
                        <PlayCircleOutlined style={{fontSize:"35px",color:"#fff"}}/>
                    </div>

                </div>

                <div className="video-detail">

                    <div className='video-title'>
                        <h2> {Title} </h2>

                        <MoreOutlined style={
                            {
                                color: "#fff",
                                cursor: "pointer",
                                fontWeight: "600"
                            }
                        }/>

                    </div>

                    <div className='posted-by'>
                        {PostedBy} </div>

                    <div className='views-time'>
                        {
                        `${Views} views | ${Time} ago`
                    } </div>


                </div>

                <div className="bottomIcons">
                    <DislikeOutlined style={
                        {
                            color: "#ccc",
                            fontSize: "18px"
                        }
                    }/>
                    <h2>
                        0
                    </h2>
                    <LikeOutlined style={
                        {
                            color: "#ccc",
                            fontSize: "18px"
                        }
                    }/>
                    <h2>
                        0
                    </h2>
                    <HeartOutlined style={
                        {
                            color: "#ccc",
                            fontSize: "18px"
                        }
                    }/>
                    <h2>
                        0
                    </h2>

                </div>


            </div>

        </Wrapper>
    );
}
