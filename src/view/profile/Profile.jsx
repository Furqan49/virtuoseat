import React from 'react'
import {Wrapper} from './Profile.styled'

import CoverImage from './coverImage/CoverImage'
import UserCard from '../../components/userCard/UserCard'
import InformationTabs from './informationTabs/InformationTabs'

export default function IndexPage() {

    return (
        <Wrapper>
            <CoverImage/>
            <UserCard Title={"Isobel Johnston"} Views={200}/>
            <InformationTabs/>
        </Wrapper>
    )
}