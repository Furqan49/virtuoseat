import React from 'react'
import {Wrapper} from './HomePage.styled'
import MainImage from "../../assets/images/mainheader.jpg"

import RecentVideos from './recentVideos/RecentVideos'
import PopulorMember from './populorMember/PopulorMember'
import RecentAudio from './recentAudio/RecentAudio'
import Games from './games/Games'
import FilmAndAnimation from './filmAndAnimation/FilmAndAnimation'
import Entertainment from './entertainment/Entertainment'

export default function IndexPage() {

    return (
        <Wrapper>

            <div className="top-image">

                <img src={MainImage}/>

            </div>

            <div className='main-container'>

                <RecentVideos/>
                <PopulorMember/>
                <RecentAudio/>
                <Games/>
                <FilmAndAnimation/>
                <Entertainment/>

            </div>

        </Wrapper>
    )
}
