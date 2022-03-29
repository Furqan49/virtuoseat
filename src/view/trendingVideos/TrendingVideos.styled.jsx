import styled from "styled-components";

export const Wrapper = styled.div`

.video-container{
    padding:20px;
}

.note{
    color:white;
    font-weight:500;
    font-size:18px;
    background: #282828;
    padding: 30px;
    margin-top:50px;
    span{
        display:flex;
        justify-content:center;
    }
}

.button{
    padding: 5px 15px;
    display:inline-block;
    color:white;
    font-weight:400;
    cursor:pointer;
    margin: 0px 0px 20px 0px;
}

.topbtn{
    display: flex;
    justify-content: end;
}

.ant-tabs-tab:hover{
    color:white;
}
.ant-tabs-tab{
    font-weight:800;
    color:#959aaa;
    font-size:16px;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color:white;
}
.ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before{
    border-bottom:none;
}
.ant-tabs-ink-bar{
    background:#1565C0;
}

`