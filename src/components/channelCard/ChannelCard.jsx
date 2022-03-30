import React from 'react'
import styledComponents from 'styled-components';
import Cover from "../../assets/images/coverImage.jpg"

import {
    MoreOutlined,
    DislikeOutlined,
    LikeOutlined,
    HeartOutlined,
} from '@ant-design/icons';


function ChannelCard({title,views,videos,subscribers}) {
    return (
        <Wrapper>
            <div className="chnl-container">
                <img src={Cover}
                    className="headerImage"/>

                <div className='chnl-content'>

                    <img src={Cover}
                        className="user-img"/>

                    <div className="chnl-title">
                        <p> {title}
                            <MoreOutlined style={
                                {
                                    color: "#fff",
                                    fontSize: "16px",
                                    cursor: "pointer"
                                }
                            }/>
                        </p>
                    </div>
                    <div className="stats">
                        {views}{" "}
                        Views
                    </div>

                    <div className="stats">
                        {videos} {" "}
                        Videos | {subscribers} {" "}
                        Subscribers
                    </div>

                    <div className='subscribe-button'>
                        Subscribe
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
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default ChannelCard;

const Wrapper = styledComponents.div `
.chnl-container{
    height:auto;
    background:#333333;
    border-radius:15px;
}
.headerImage{
    width:100%;
    border-radius:15px 15px 0px 0px;
    height:180px; 
}
.chnl-content{
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    top: -45px;

}
.chnl-title{
    margin:10px 0px;
    p{
        color:white;
        font-size:16px;
        font-weight:bold;
        letter-spacing:0.5px;
        cursor:pointer;
        margin:0px 5px 0px 0px ;
    }

}
.user-img{
    border-radius:50%;
    width:130px;
    height:130px;
    border: 3px solid #fff;
}
.subscribe-button{
    background:#656060;
    border: 1px solid #fff;
    padding: 3px 15px;
    color:#fff;
    border-radius: 5px;
    cursor:pointer;
}

.subscribe-button:hover{
    background:#2B5407;
}
.bottomIcons{
    display:flex;
    align-items:center;
    margin: 20px 0px -20px 0px;
    img{
        padding-right:15px;
    }

    h2{
        color:#ccc;
        font-size:16px;
        margin:0px 10px;
        padding-right:15px;
    }
}
.stats{
    color:#ccc;
    margin-bottom:10px;
}
`
