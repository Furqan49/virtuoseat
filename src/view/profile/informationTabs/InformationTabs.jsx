import React from 'react'
import {Tabs} from 'antd';
import {Wrapper} from "./InformationTabs.styled"

import About from './about/About';
import Video from './video/Video';
import Channel from './channel/Channel';
import Blog from './blog/Blog';
import Playlists from './playlists/Playlists'
import Audioo from './audioo/Audioo'
import Comment from './comment/Comment';


function InformationTabs() {

    const {TabPane} = Tabs;


    return (
        <Wrapper>
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="ABOUT" key="1">
                        <About/>
                    </TabPane>
                    <TabPane tab="VIDEOS" key="2">
                        <Video/>
                    </TabPane>
                    <TabPane tab="CHANNEL" key="3">
                        <Channel/>
                    </TabPane>
                    <TabPane tab="BLOGS" key="4">
                        <Blog/>
                    </TabPane>
                    <TabPane tab="PLAYLISTS" key="5">
                        <Playlists/>
                    </TabPane>
                    <TabPane tab="AUDIO" key="6">
                        <Audioo/>
                    </TabPane>
                    <TabPane tab="COMMENTS" key="7">
                        <Comment/>
                    </TabPane>
                </Tabs>
            </div>
        </Wrapper>
    )
}

export default InformationTabs;
