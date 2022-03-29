import React from 'react'
import {Rate} from 'antd';

function About() {
    return (
        <div className='entity'>

            <div className='heading'>

                <h2>Rating
                </h2>
                <h2>First Name
                </h2>
                <h2>Last Name
                </h2>
                <h2>Member Since
                </h2>
                <h2>Gender
                </h2>

            </div>

            <div className='textData'>

                <div className='rating'>
                    <div><Rate/>
                    </div>
                    <span className='stars'>0 out of 5 stars</span>
                </div>
                <p>First Name
                </p>
                <p>Last Name
                </p>
                <p>Member Since
                </p>
                <p>Gender
                </p>

            </div>

        </div>
    )
}

export default About
