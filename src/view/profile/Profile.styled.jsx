import styled from "styled-components";

export const Wrapper = styled.div `
padding:0px 20px;

.top-image{
    img {
        width:100%;
        border-radius: 20px;
        height: 350px;
    }
}
.video-container{
    padding:0px 20px 80px 20px;
    border-bottom:1px solid white;
    margin-bottom:50px;
}

.title-container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
}

.title{
    display:flex;
    align-items:center;
    padding: 5px 0px;
    h2{
        font-size: 16px;
        text-transform: uppercase;
        color:white;
        margin:0px 0px 0px 10px;
        font-weight:600;
    }
}

.see-button{
    background:#2B5407;
    border-radius:40px;
    padding: 5px 15px;
    color:white;
    font-weight:400;
    cursor:pointer;
    display:none;
}


.tab-button{
    background:#2B5407;
    border-radius:50%;
    padding: 10px 12px;
    color:white;
    font-weight:400;
    cursor:pointer;
    display:inline;
    margin-left:5px;
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


.slick-prev, .slick-next {
    display:none !important;
}
`
