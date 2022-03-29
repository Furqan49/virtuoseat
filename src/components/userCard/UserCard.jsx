import React from 'react';
import {Wrapper} from './UserCard.styled';
import videothumb from "../../assets/images/videothumb.jpg"
import {
    ShareAltOutlined,
    DislikeOutlined,
    LikeOutlined,
    HeartOutlined,
    CheckCircleFilled
} from '@ant-design/icons';



export default function IndexPage({Title, Views, Time}) {
    return (
        <Wrapper>
            <div className="member-card">

                <div className='profile-picture'>

                    <img src={videothumb}/>

                </div>


                <div className='user-detail'>

                    <div className="user-above-detail">

                        <div className='user-title'>
                            <h2> {Title} </h2>

                            <CheckCircleFilled style={
                                {color: "#2296f3",fontSize:"20px"}
                            }/>

                        </div>

                        <div className='views'>
                            {
                            `${Views} Views`
                        } </div>

                    </div>


                    <div className='user-below-detail'>

                        <div className='follow-button'>
                            Follow</div>

                        <div className="bottomIcons">
                            <LikeOutlined style={
                                {
                                    color: "#ccc",
                                    fontSize: "24px"
                                }
                            }/>
                            <h2>
                                0
                            </h2>
                            <DislikeOutlined style={
                                {
                                    color: "#ccc",
                                    fontSize: "24px"
                                }
                            }/>
                            <h2>
                                0
                            </h2>
                            <HeartOutlined style={
                                {
                                    color: "#ccc",
                                    fontSize: "24px"
                                }
                            }/>
                            <h2>
                                0
                            </h2>
                            <ShareAltOutlined style={
                                {
                                    color: "#ccc",
                                    fontSize: "24px"
                                }
                            }/>

                        </div>

                    </div>

                </div>
            </div>
        </Wrapper>
    )
}