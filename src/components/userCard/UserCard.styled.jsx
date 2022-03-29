import styled from "styled-components";

export const Wrapper = styled.div `

.member-card{
    display:flex;
    align-items:center;
}

.profile-picture{
    border-radius:50%;
    width:200px;
    height:200px;
    background: #181818;
    border: 3px solid #fff;
    position: relative;
    top: -85px;
    img {
        width:100%;
        border-radius:50%;
        height:100%;
    }
}

.user-detail{
    margin-left:20px;
}

.user-above-detail{
    display:flex;
    flex-direction:column;
    position:relative;
    top:-90px;
}

.user-below-detail{
    position:relative;
    top:-65px;
}


.user-title{
    display:flex;
    align-items:center;
    h2{
        color:white;
        font-size:24px;
        font-weight:bold;
        letter-spacing:0.5px;
        margin:0px 5px 0px 0px ;
    }
}

.views{
    color:#fff;
}

.follow-button{
    background:#656060;
    border: 1px solid #fff;
    padding: 10px 15px;
    color:#fff;
    display:inline-block;
    border-radius: 5px;
    cursor:pointer;
    font-weight:600;
}

.follow-button:hover{
    background:#2b5407;
}

.bottomIcons{
    display:flex;
    align-items:center;
    margin:20px 0px 0px 0px;
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
