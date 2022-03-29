import React from 'react'
import {Wrapper} from './TopVideos.styled'

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
