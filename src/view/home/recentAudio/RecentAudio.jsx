import React from 'react'
import AudioCard from "../../../components/audioCard/AudioCard"

import {CustomerServiceOutlined} from '@ant-design/icons';


function RecentAudio() {

    return (
        <div className='video-container'>

            <div className='title-container'>
                <div className='title'>
                    <CustomerServiceOutlined  style={
                        {
                            fontSize: '18px',
                            color: "#e91e63"
                        }
                    }/>
                    <h2>
                        Recent Audio
                    </h2>
                </div>

            </div>

                    <div>
                        <AudioCard Title={"James Dutrow"}
                            Subtitle={"The naming of Cats"}/>
                    </div>


        </div>
    )
}

export default RecentAudio
