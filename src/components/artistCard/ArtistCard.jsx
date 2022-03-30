import React from 'react';
import {Wrapper} from './ArtistCard.styled';
import videothumb from "../../assets/images/videothumb.jpg"
import {
    ShareAltOutlined,
    DislikeOutlined,
    LikeOutlined,
    HeartOutlined,
    CheckCircleFilled
} from '@ant-design/icons';

import {useHistory} from "react-router-dom"


export default function IndexPage({Title}) {

    const history = useHistory();

    return (
        <Wrapper>

            <div className="member-card">

                <div className='profile-picture'>

                    <img src={videothumb}/>

                </div>

                <div className="member-detail">

                    <div className='member-title'>
                        <h2> {Title} </h2>

                    </div>

                </div>

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

        </Wrapper>
    );
}
