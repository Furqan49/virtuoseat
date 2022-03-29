import React from 'react'
import {Wrapper} from './TrendingVideos.styled'

import Videos from './videos/Videos'

export default function IndexPage() {

    return (
        <Wrapper>

            <div className='main-container'>

                <Videos/>
            </div>

        </Wrapper>
    )
}
