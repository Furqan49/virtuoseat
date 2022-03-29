import styled from "styled-components";

export const Wrapper = styled.div `

.member-card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.profile-picture{
    border-radius:50%;
    width:225px;
    height:225px;
    background: #181818;
    margin-bottom:5px;
    cursor:pointer;
    border: 5px solid #333333;
    img {
        cursor:pointer;
        width:100%;
        border-radius:50%;
        height:100%;
    }
}

.member-detail{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:5px;
}

.member-title{
    display:flex;
    align-items:center;
    h2{
        color:white;
        font-size:16px;
        font-weight:bold;
        letter-spacing:0.5px;
        cursor:pointer;
        margin:0px 5px 0px 0px ;
    }
}

.views{
    color:#ccc;
    font-weight:600;
    margin: 10px 0px;
}

.follow-button{
    background:#656060;
    border: 1px solid #fff;
    padding: 3px 15px;
    color:#fff;
    border-radius: 5px;
    cursor:pointer;
    font-weight:600;
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
