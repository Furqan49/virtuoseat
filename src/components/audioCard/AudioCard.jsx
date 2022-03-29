import React from 'react';
import {Wrapper} from './AudioCard.styled';
import audioimage from "../../assets/images/audioimage.png"
import {
    ShareAltOutlined,
    DislikeOutlined,
    LikeOutlined,
    HeartOutlined,
    CheckCircleFilled
} from '@ant-design/icons';

import {useHistory} from "react-router-dom"


export default function IndexPage({Title, Subtitle}) {

    const history = useHistory();

    return (
        <Wrapper>

            <div className="member-card">

                <div className='profile-picture'>

                    <img src={audioimage}/>

                </div>

                <div className="member-detail">

                    <div className='member-title'>
                        <h2> {Title} </h2>

                        <CheckCircleFilled style={
                            {color: "#2296f3"}
                        }/>

                    </div>

                    <div className='subtitle'>
                        {Subtitle} </div>

                    <div className="bottomIcons">
                        <LikeOutlined style={
                            {
                                color: "#ccc",
                                fontSize: "18px"
                            }
                        }/>
                        <h2>
                            0
                        </h2>
                        <DislikeOutlined style={
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
                        <ShareAltOutlined style={
                            {
                                color: "#ccc",
                                fontSize: "18px"
                            }
                        }/>

                    </div>


                </div>


            </div>

        </Wrapper>
    );
}
