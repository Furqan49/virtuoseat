import React from 'react'
import {
    RiseOutlined,
    BarChartOutlined,
    UserOutlined,
    ShoppingOutlined,
    VideoCameraFilled,
    FileOutlined,
    TeamOutlined,
    CustomerServiceOutlined,
    ProfileOutlined,
    PlayCircleOutlined,
    WifiOutlined,
    HomeFilled
} from '@ant-design/icons';
import {SocialIcon} from 'react-social-icons';
import {Switch} from 'antd';
import {useHistory} from "react-router-dom"


function SidebarOpen() {

    const history = useHistory();


    return (
        <div className='openSidebar'>


            <div className='container'>

                <div onClick={
                        () => {
                            history.push("/")
                        }
                    }
                    className={
                        history.location.pathname == '/' ? 'active openTab' : 'openTab'
                }>
                    <HomeFilled style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Home
                    </p>
                </div>

                <div onClick={
                        () => {
                            history.push("/latestvideos")
                        }
                    }
                    className={
                        history.location.pathname == '/latestvideos' ? 'active openTab' : 'openTab'
                }>
                    <VideoCameraFilled style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Latest Videos
                    </p>
                </div>

                <div onClick={
                        () => {
                            history.push("/trendingvideos")
                        }
                    }
                    className={
                        history.location.pathname == '/trendingvideos' ? 'active openTab' : 'openTab'
                }>
                    <RiseOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Trending Videos
                    </p>
                </div>


                <div onClick={
                        () => {
                            history.push("/topvideos")
                        }
                    }
                    className={
                        history.location.pathname == '/topvideos' ? 'active openTab' : 'openTab'
                }>
                    <BarChartOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Top Videos
                    </p>
                </div>
            </div>

            {/* POPULAR MEMBERS */}

            <div className='container'>

                <h2 className='title'>
                    Popular Members
                </h2>

                <div onClick={
                        () => {
                            history.push("/profile")
                        }
                    }
                    className={
                        history.location.pathname == '/profile' ? 'active openTab' : 'openTab'
                }>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Isobel Johnston
                    </p>
                </div>
                <div className='openTab'>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Shaneen Baptise
                    </p>
                </div>
                <div className='openTab'>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Prashant Sharma
                    </p>
                </div>
                <div className='openTab'>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Jenifer Vaughn
                    </p>
                </div>
                <div className='openTab'>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Monique N Vaughn
                    </p>
                </div>
            </div>

            {/* MENUS */}

            <div className='container'>

                <h2 className='title'>
                    Menus
                </h2>

                <div onClick={
                        () => {
                            history.push("/store")
                        }
                    }
                    className={
                        history.location.pathname == '/store' ? 'active openTab' : 'openTab'
                }>
                    <ShoppingOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Store
                    </p>
                </div>

                <div onClick={
                        () => {
                            history.push("/videos")
                        }
                    }
                    className={
                        history.location.pathname == '/videos' ? 'active openTab' : 'openTab'
                }>
                    <VideoCameraFilled style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Videos
                    </p>
                </div>
                <div className='openTab'>
                    <FileOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Channel
                    </p>
                </div>
                <div onClick={
                        () => {
                            history.push("/members")
                        }
                    }
                    className={
                        history.location.pathname == '/members' ? 'active openTab' : 'openTab'
                }>
                    <TeamOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Members
                    </p>
                </div>
                <div onClick={
                        () => {
                            history.push("/audio")
                        }
                    }
                    className={
                        history.location.pathname == '/audio' ? 'active openTab' : 'openTab'
                }>
                    <CustomerServiceOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Audio
                    </p>
                </div>
                <div className='openTab'>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Artists
                    </p>
                </div>
                <div className='openTab'>
                    <ProfileOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Categories
                    </p>
                </div>
                <div className='openTab'>
                    <WifiOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Blogs
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Playlists
                    </p>
                </div>
            </div>

            {/* CATEGORIES */}

            <div className='container'>

                <h2 className='title'>
                    Categories
                </h2>

                <div className='openTab'>
                    <ShoppingOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Photography
                    </p>
                </div>
                <div className='openTab'>
                    <VideoCameraFilled style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Vehicle & Automobile
                    </p>
                </div>
                <div className='openTab'>
                    <FileOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Sports
                    </p>
                </div>
                <div className='openTab'>
                    <TeamOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        People & Blog
                    </p>
                </div>
                <div className='openTab'>
                    <CustomerServiceOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        News % Politics
                    </p>
                </div>
                <div className='openTab'>
                    <UserOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Music
                    </p>
                </div>
                <div className='openTab'>
                    <ProfileOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Parenting
                    </p>
                </div>
                <div className='openTab'>
                    <WifiOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Howto & Style
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Health & Fitness
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Games
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Film & Animation
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Entertainment
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Cooking
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Challenge
                    </p>
                </div>
                <div className='openTab'>
                    <PlayCircleOutlined style={
                        {
                            fontSize: '20px',
                            color: "#8f908f"
                        }
                    }/>
                    <p>
                        Challenge
                    </p>
                </div>
            </div>


            {/* SETTING */}

            <div className='container'>

                <h2 className='title'>
                    Settings
                </h2>

                <div className='openTab'>
                    <Switch defaultChecked size='small' color="black"/>
                    <p style={
                        {
                            color: "#555555",
                            fontSize: "16px"
                        }
                    }>
                        Adult Content
                    </p>
                </div>

            </div>

            {/* FOLLOW ON */}

            <div className='container'>

                <h2 className='title'>
                    Follow Us On
                </h2>

                <div className='socialIconTab'>
                    <SocialIcon network='facebook' fgColor="#fff"
                        style={
                            {
                                height: 35,
                                width: 35,
                                marginRight: "10px"
                            }
                        }/>
                    <SocialIcon network='twitter' fgColor="#fff"
                        style={
                            {
                                height: 35,
                                width: 35,
                                marginRight: "10px"
                            }
                        }/>
                    <SocialIcon network='vimeo' fgColor="#fff"
                        style={
                            {
                                height: 35,
                                width: 35,
                                marginRight: "10px"
                            }
                        }/>
                    <SocialIcon network='youtube' fgColor="#fff"
                        style={
                            {
                                height: 35,
                                width: 35,
                                marginRight: "10px"
                            }
                        }/>
                    <SocialIcon network='pinterest' fgColor="#fff"
                        style={
                            {
                                height: 35,
                                width: 35,
                                marginRight: "10px"
                            }
                        }/>

                </div>

            </div>

            {/* BOTTOM */}

            <div className='container'>
                <div className='footer'>
                    <ul>
                        <li>
                            Privacy
                        </li>
                        <li>
                            Terms of Service
                        </li>
                        <br/><li>
                            Contact
                        </li>
                    </ul>

                    <p style={
                        {
                            color: "#555555",
                            fontSize: "16px"
                        }
                    }>
                        Copyright © 2022 virtuoseat.com. All Rights Reserved.
                    </p>
                </div>


            </div>
        </div>
    )

}
export default SidebarOpen
