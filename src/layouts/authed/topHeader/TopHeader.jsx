import React, {useState} from 'react';
import {Wrapper} from './TopHeader.styled';
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {Popover} from 'antd';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import LoginModal from '../../../components/loginModal/LoginModal';
import caretIcon from "../../../assets/icons/caretIcon.svg"
import profile from "../../../assets/icons/profile.svg"
import logo from "../../../assets/images/logo.png";
import hamBurgerIcon from "../../../assets/icons/hamBurger.svg"


export default function IndexPage() {
    const dispatch = useDispatch();
    const isCollapse = useSelector((state) => state.common.isCollapse);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const suffix = (
        <SearchOutlined style={
            {
                fontSize: 16,
                color: 'white'
            }
        }/>
    );

    const settingContent = (
        <div className='settingDetails'>
            <span onClick={
                () => setIsModalVisible(true)
            }>
                Login
            </span>
            <span>
                Signup
            </span>
        </div>
    );


    return (
        <Wrapper>

            <div className="topBar">

                <div className='leftside'>

                    <div className="hamburger">
                        <img src={hamBurgerIcon}
                            onClick={
                                () => {
                                    dispatch({
                                        type: 'SET_COLLAPSE',
                                        payload: {
                                            isCollapse: ! isCollapse
                                        }
                                    })
                                }
                            }/>
                    </div>

                <div className='logo'>
                    <img src={logo}/>

                </div>

            </div>

            <div className='searchBar'>

                <Input placeholder="Search..." enterButton="Search" size="medium"
                    suffix={suffix}/>
            </div>

            
            <Popover content={settingContent}
                placement="topRight"
                overlayClassName='settingPopover'>

                <div className="topBarIcons">

                    <img src={profile}/>
                    <img className='caretIcon'
                        src={caretIcon}/>

                </div>

            </Popover>

        </div>
        {
        isModalVisible && <LoginModal isModalVisible
            onCancel={
                () => setIsModalVisible(false)
            }
            onClick={
                () => setIsModalVisible(false)
            }/>
    } </Wrapper>
    );
}
