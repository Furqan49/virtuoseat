import React from 'react'
import Slider from "react-slick";
import PopularMemberCard from "../../../components/popularMemberCard/PopularMemberCard"

import {TeamOutlined, RightOutlined, LeftOutlined} from '@ant-design/icons';


function PopulorMember() {

    let slide = null

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className='video-container'>

            <div className='title-container'>
                <div className='title'>
                    <TeamOutlined style={
                        {
                            fontSize: '18px',
                            color: "#e91e63"
                        }
                    }/>
                    <h2>
                        Popular Members
                    </h2>
                </div>

                <div className='move-button'>

                    <div className='tab-button'
                        onClick={
                            () => {
                                if (slide != null) {
                                    slide.slickPrev()
                                }
                            }
                    }>

                        <LeftOutlined/>
                    </div>
                    <div className='tab-button'
                        onClick={
                            () => {
                                if (slide != null) {
                                    slide.slickNext()
                                }
                            }
                    }>
                        <RightOutlined/>
                    </div>
                </div>
            </div>

            <div>
                <Slider {...settings}
                    ref={
                        (slider) => {
                            slide = slider
                        }
                }>
                    <div>
                        <PopularMemberCard Title={"Shaneen Baptiste"}
                            Views={"120"}/>
                    </div>
                    <div>
                        <PopularMemberCard Title={"Shaneen Baptiste"}
                            Views={"120"}/>
                    </div>
                    <div>
                        <PopularMemberCard Title={"Shaneen Baptiste"}
                            Views={"120"}/>
                    </div>
                    <div>
                        <PopularMemberCard Title={"Shaneen Baptiste"}
                            Views={"120"}/>
                    </div>
                    <div>
                        <PopularMemberCard Title={"Shaneen Baptiste"}
                            Views={"120"}/>
                    </div>
                    <div>
                        <PopularMemberCard Title={"Shaneen Baptiste"}
                            Views={"120"}/>
                    </div>
                </Slider>

            </div>

        </div>
    )
}

export default PopulorMember
