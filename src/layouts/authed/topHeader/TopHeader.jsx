import React, { useState } from "react";
import { Wrapper } from "./TopHeader.styled";
import { Input, Menu, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import info from "../../../assets/icons/info.svg";
import video from "../../../assets/icons/video.svg";
import caretIcon from "../../../assets/icons/caretIcon.svg";
import profile from "../../../assets/icons/profile.svg";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import hamBurgerIcon from "../../../assets/icons/hamBurger.svg";

export default function IndexPage() {
  const dispatch = useDispatch();
  const isCollapse = useSelector((state) => state.common.isCollapse);
  const history = useHistory();
  console.log(isCollapse);

  const menu = (
    <Menu style={{ width: "150px" }}>
      <Menu.Item>
        <p>Login</p>
      </Menu.Item>
      <Menu.Item>
        <p>Signup</p>
      </Menu.Item>
    </Menu>
  );
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "white",
      }}
    />
  );

  return (
    <Wrapper>
      <div className="topBar">
        <div className="leftside">
          <div className="hamburger">
            <img
              src={hamBurgerIcon}
              onClick={() => {
                dispatch({
                  type: "SET_COLLAPSE",
                  payload: {
                    isCollapse: !isCollapse,
                  },
                });
              }}
            />
          </div>

          <div className="logo">
            <img src={logo} />
          </div>
        </div>
        <div className="searchBar">
          <Input
            placeholder="Search..."
            enterButton="Search"
            size="medium"
            suffix={suffix}
          />
        </div>
        <Dropdown className="userModal" overlay={menu}>
          <div className="topBarIcons">
            <img src={profile} />
            <img className="caretIcon" src={caretIcon} />
          </div>
        </Dropdown>
      </div>
    </Wrapper>
  );
}
