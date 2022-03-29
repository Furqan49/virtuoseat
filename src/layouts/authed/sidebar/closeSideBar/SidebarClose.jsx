import React from 'react'
import {RiseOutlined, BarChartOutlined, VideoCameraFilled, HomeFilled} from '@ant-design/icons';
import {useHistory} from "react-router-dom"


function SidebarClose() {

    const history = useHistory();


    return (
        <div className='closeSidebar'>

            <div onClick={
                    () => {
                        history.push("/")
                    }
                }
                className={
                    history.location.pathname == '/' ? 'active closeTab' : 'closeTab'
            }>
                <HomeFilled style={
                    {fontSize: '18px'}
                }/>
                <p>Home</p>
            </div>

            <div onClick={
                    () => {
                        history.push("/latestvideos")
                    }
                }
                className={
                    history.location.pathname == '/latestvideos' ? 'active closeTab' : 'closeTab'
            }>
                <VideoCameraFilled style={
                    {fontSize: '18px'}
                }/>
                <p>Latest Videos</p>
            </div>

            <div onClick={
                    () => {
                        history.push('/trendingvideos')
                    }
                }
                className={
                    history.location.pathname == '/trendingvideos' ? 'active closeTab' : 'closeTab'
            }>
                <RiseOutlined style={
                    {fontSize: '18px'}
                }/>
                <p>Trending Videos</p>
            </div>

            <div onClick={
                    () => {
                        history.push('/topvideos')
                    }
                }
                className={
                    history.location.pathname == '/topvideos' ? 'active closeTab' : 'closeTab'
            }>
                <BarChartOutlined style={
                    {fontSize: '18px'}
                }/>
                <p>Top Videos</p>
            </div>
        </div>
    )

}
export default SidebarClose
