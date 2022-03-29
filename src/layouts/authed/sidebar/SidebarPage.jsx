import React from 'react';
import {Wrapper} from "./SidebarPage.styled"
import SidebarClose from './closeSideBar/SidebarClose';
import SidebarOpen from './openSideBar/SidebarOpen';
import {useSelector} from "react-redux";

export default function IndexPage() {
    const isCollapse = useSelector((state) => state.common.isCollapse);

    return (
        <Wrapper style={
            {
                width: isCollapse ? "300px" : '100px'
            }
        }>
            {
            ! isCollapse ? <SidebarClose/>: <SidebarOpen/>
        } 
        
        </Wrapper>
    )
}
