import React from 'react'
import styled from 'styled-components';
import {
    Button,
    Modal,
    Input,
} from 'antd';


function LoginModal({isModalVisible,onCancel,onClick}) {

    return (
        <div>
            <Modal visible={isModalVisible}
                footer={null}
                onCancel={onCancel}>
                <ModalWrapper>

                    <div>
                        <Input type="text" placeholder="Email/Username"/>
                    </div>
                    <div>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <Button type="primary"
                            onClick={onClick}>LOGIN</Button>
                    </div>
                </ModalWrapper>

            </Modal>
        </div>
    )
}

export default LoginModal

export const ModalWrapper = styled.div `
.ant-input{
    padding:10px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    color: #C4C4C4;
    font-weight:500;
    margin-bottom:10px;
}
.input-line2{
    display:flex;

}
.ant-dropdown-trigger{
    width:50%;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    color: #C4C4C4;
    font-weight:500;
    padding: 10px;
    height: auto;
    margin:0px 10px 10px 0px;
}
.ant-btn-primary{
    background: #2B5407;
    border:none;
    color: white;
    border-radius: 5px;
    width:100%;
    height:auto;
    padding:15px 50px;
    margin-top:10px;
}
`
