import styled from "styled-components";

export const Wrapper = styled.div `

.member-card{
    display:flex;
    justify-content:center;
    align-items:center;
}

.profile-picture{
    width:150px;
    height:150px;
    background: #181818;
    margin-right:5px;
    cursor:pointer;
    img {
        width:100%;
        height:100%;
    }
}

.member-title{
    display:flex;
    align-items:center;
    h2{
        color:#ccc;
        font-size:14px;
        cursor:pointer;
        margin:0px 5px 0px 0px ;
    }
}

.subtitle{
    color:#fff;
    font-size:12px;
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
