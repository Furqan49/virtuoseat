import React from "react";
import {Layout} from "antd";
import styled from "styled-components";
import BaseLayout from "../base/BaseLayout";
import TopHeader from "./topHeader/TopHeader";
import Sidebar from "./sidebar/SidebarPage"
import {useSelector} from "react-redux";

const {Header, Content} = Layout;

export default function AuthedLayout({children, pathname}) {
    const isCollapse = useSelector((state) => state.common.isCollapse);

    return (
        <BaseLayout>
            <LayoutWrapper>
                <Layout>

                    <Sidebar/>

                    <Layout className="ant-custom-layout">

                        <Header className="site-layout-background">
                            <TopHeader/>
                        </Header>

                        <Content>
                            <Wrapper className={"pageContent"}
                                style={
                                    {
                                        marginLeft: isCollapse ? "300px" : '100px'
                                    }
                            }>

                                <div className={"container"}
                                    style={
                                        {height: "100%"}
                                }>
                                    {children} </div>

                            </Wrapper>
                        </Content>
                    </Layout>
                </Layout>
            </LayoutWrapper>
        </BaseLayout>
    );
}

const Wrapper = styled.div `
  height: 100%;
  background:#181818;
`;
const LayoutWrapper = styled.div `

.ant-layout-content{
  background:#181818;
    
}

.ant-custom-layout{    
transition: margin-left 0.7s;
transition-timing-function: ease-in-out;
}
.pageContent{
    transition: margin-left 0.7s;
    transition-timing-function: ease-in-out;
}
.ant-layout-header{
    padding:0px;
    position: sticky;
    top: 0;
    z-index: 200;
    height:100px;
}
`
