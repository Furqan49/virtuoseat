import styled from "styled-components";

export const Wrapper = styled.div `

.video-thumb{
    border-radius:5px 5px 0px 0px;
    height:180px;
    background: #cecece;
    margin-bottom:5px;
    cursor:pointer;
    img {
        cursor:pointer;
        width:100%;
        border-radius:5px 5px 0px 0px;
        height:100%;
    }
}

.video-play-icon{
    display:none;
}

.video-thumb:hover{
    .video-play-icon{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height:100%;
    }
    img{
        display:none;
    }
}

.dp{
    background:white;
    width:20px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
}
.video-title{
    display:flex;
    align-items:center;
    justify-content:space-between;
    h2{
        color:white;
        font-size:18px;
        letter-spacing:0.5px;
        cursor:pointer;
    }
}

.posted-by{
    color:#ccc;
}

.views-time{
    color:#ccc;
}

.bottomIcons{
    display:flex;
    align-items:center;
    margin:10px 0px 0px 0px;
    padding-bottom:10px;
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
`
