import React from 'react'
import styled from 'styled-components';
import avatar from "../../../../assets/images/dpimage.png"
import {Upload} from 'antd';
import {CameraFilled} from "@ant-design/icons"

function Comment() {


    return (

        <Wrapper>

            <div className='comment-container'>
                <div className='create-comment'>
                    <div className='user-avatar'>
                        <img src={avatar}
                            alt=""/>
                    </div>
                    <div className='input-comment'>
                        <textarea placeholder="Write your comment here..."></textarea>

                        <div className='comment-action'>
                            <div className='comment-file'>

                                <Upload listType="picture" className="upload-list-inline" multiple="false" maxCount={1}
                                    beforeUpload={
                                        (file) => {
                                            return false;
                                        }
                                    }>
                                    <CameraFilled style={
                                        {
                                            fontSize: '20px',
                                            color: "#fff"
                                        }
                                    }/>
                                </Upload>

                            </div>
                            <button className='post-comment'>Post</button>
                        </div>

                    </div>
                </div>

                <div className='message'>
                    No comment posted yet.
                </div>

            </div>
        </Wrapper>
    )
}

export default Comment

const Wrapper = styled.div `
.create-comment{
    background: #181818;
    width:100%;
    padding:15px;
    display:flex;
    align-items:center;
    margin-bottom:35px;
}
.user-avatar{
    margin-right: 20px;
    img {
        width:50px;
        height:50px;
        border-radius:50%;
    }
}
.input-comment{
    width: 100%;
    textarea{
        width: 100%;
        font-weight: 300;
        font-size: 16px;
        padding: 10px 0;
        border:none;
        background: 0 0;
        resize: none;
        color:white;
    }
    textarea:focus, input:focus{
        outline: 0;
    }
}
.post-comment{
    background:#2b5407;
    padding: 5px 15px;
    color: #ffffff;
    border-radius: 5px;
    border:none;
    margin-left:20px;
}
.comment-action{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.comment-file{
    input {
        display:none;
    }
}
.ant-upload-list-item-name{
    color:white;
  }
  .ant-upload-list-item-card-actions .anticon{
    color:white;
  }
  .ant-upload-list-picture-container{
    margin-right:10px;
  }
`
