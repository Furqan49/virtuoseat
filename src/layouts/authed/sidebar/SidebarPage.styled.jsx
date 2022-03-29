import styled from "styled-components";

export const Wrapper = styled.div `
position:fixed;
margin-top:100px;
left:0px;
height:100%;
background:#212121;
display: flex;
flex-direction: column;
align-items: center;
transition: width 0.7s;
transition-timing-function: ease-in-out;

.closeSidebar{
    width:100%;
}
.openSidebar{
    width:100%;
    padding-bottom: 80px;
    overflow-y:auto;
}


.logo{
    margin-bottom:10px;
    padding:20px;
    cursor: pointer;
    width:100%;
}

.closeTab{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:10px 0px;
    color:white;
    width:100%;
    cursor:pointer;
    margin-bottom:10px;
}

.closeTab{
    p{
        font-size:12px;
        margin-bottom:0px;
        margin-top:5px;
       }
}

.socialIconTab{
    padding: 8px 24px;
}

.openTab{
    display: flex;
    align-items: center;
    width:100%;
    cursor:pointer;
    padding: 8px 24px;
    p{
        font-size:16px;
        margin:0px 0px 0px 10px;
        color:white;
           }
}

.openTab:hover{
    background:#383838;
}

.title{
    font-size: 16px;
    text-transform: uppercase;
    padding: 0 24px 5px 24px;
    color:white;
    margin:0px;
}

.container{
    border-bottom:1px solid #3C3C3C;
    padding-bottom:15px;
    margin-bottom:15px;
    .footer {
        padding-left:24px;
    }
    ul{
        padding:0px;
    }
    ul li {
        list-style-type: none;
        display:inline;
        padding-right:10px;
        font-size: 16px;
        color:white;
    }
}

.divider{
    background: #F5F5F5;
    width: 100%;
    height:1px;
}
.active{
    background: #383838;    
}

.ant-switch-checked{
    background-color: #2b5407;
}

`
