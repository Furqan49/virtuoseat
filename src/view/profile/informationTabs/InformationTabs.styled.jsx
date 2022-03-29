import styled from "styled-components";

export const Wrapper = styled.div `
margin-bottom: 80px;
.card-container p {
    margin: 0;
  }
  .card-container > .ant-tabs-card .ant-tabs-content {
    max-height:auto;
    min-height:260px;
    margin-top: -16px;
  }
  .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
    padding: 16px;
    background: #444444;
    border-radius: 0px 0px 5px 5px;
  }
  .card-container > .ant-tabs-card .ant-tabs-tab,
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
    background: #444444;
    border-color: transparent;
    border-radius: 5px 5px 0 0;
    margin-right:2px;
  }
  .card-container > .ant-tabs-card .ant-tabs-tab-active,
  [data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
    background: #2b5407;
  }

  .ant-tabs-tab{
      color:#fff;
      font-weight:400;
      font-size:14px;
  }

  .entity {
      display:flex;
  }
  .heading {
    h2{
        margin: 0px 100px 0px 0px;
        font-size:18px;
        color:white;
        font-weight:bold;
        padding-bottom:10px;
        margin-bottom:10px;
      }
  }
  .textData{
      color:#fff;
      p{
        padding-bottom:12px;
        margin-bottom:12px;
        font-size:16px;
      }
      .rating{
          display:flex;
          align-items:center;
          padding-bottom:10px;
          margin-bottom:10px;
          .stars{
              margin-left:15px;
              color: #2b5407;
              cursor:pointer;
            }
            .stars:hover{
                color:#fff;
            }
      }
  }

  .message{
      font-size: 20px;
      color:#fff;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100%;
      margin-bottom:20px;
  }
  
  `
