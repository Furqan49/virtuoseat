import styled from "styled-components";

export const Wrapper = styled.div `
    position:sticky;
    background:#212121;
    padding: 15px 30px;
.topBar{
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.leftside{
    display:flex;
}
.hamburger{
    margin-right:15px;
}
.logo{
    max-width: 125px;
    min-width: 125px;
    img{
       width: 100%;
       height: auto;
    }
}
.searchBar{
    width:500px;
}
.topBarIcons{
    cursor:pointer;

    .caretIcon{
        margin-left:10px;
    }
}
.ant-input-affix-wrapper{
    background:#282828;
    border: 1px solid #181818;
    border-radius: 10px;
    height: 40px;
}
input{
    background: transparent;
    color:#5f5f5f;
}
input::placeholder{
    color:#5f5f5f;
}
.ant-input-affix-wrapper:hover{
    border: none;
    box-shadow:none;
}
.ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused{
    box-shadow:none;
}

`
