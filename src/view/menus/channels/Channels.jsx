import React from 'react'
import styledComponents from 'styled-components';
import ChannelCard from '../../../components/channelCard/ChannelCard'
import {FilterFilled} from '@ant-design/icons';
import {Row, Col} from 'antd';


function Channels() {

    const channelData = [
        {
            title: "New pay channel"
        },
        {
            title: "New pay channel"
        },
        {
            title: "New pay channel"
        },
        {
            title: "New pay channel"
        },
    ]

    return (
        <Wrapper>
            <div className='topbtn'>
                <div className='button'>
                    <FilterFilled style={
                        {marginRight: "5px"}
                    }/>
                    Filter
                </div>
            </div>


            <Row gutter={
                [20, 20]
            }>
                {
                channelData.map(data => {
                    return <Col xs={24}
                        sm={24}
                        md={12}
                        lg={8}
                        xl={6}
                        xxl={4}>
                        <ChannelCard title={data.title} views={0} videos={0} subscribers={0}/></Col>
            })
            } </Row>
        </Wrapper>
    )
}

export default Channels

const Wrapper = styledComponents.div `
padding:20px;
.button{
    padding: 5px 15px;
    display:inline-block;
    color:white;
    font-weight:400;
    cursor:pointer;
    margin: 0px 0px 20px 0px;
}

.topbtn{
    display: flex;
    justify-content: end;
}
`
