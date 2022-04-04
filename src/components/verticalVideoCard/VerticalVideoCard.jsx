import React from "react";
import videothumb from "../../assets/images/videothumb.jpg";
import { Wrapper } from "./VerticalVideoCard.styled";
import { Row, Col } from "antd";
import {
  MoreOutlined,
  DislikeOutlined,
  LikeOutlined,
  HeartOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
export default function VerticalVideoCard({ Title, PostedBy, Views, Time }) {
  return (
    <>
      <Wrapper>
        {[1, 2, 3, 4].map(() => {
          return (
            <Row>
              <br/>
              <Col xl={12} lg={12}>
               
                <div className="video-card">
                
                  <div className="video-thumb">
                  
                    <img src={videothumb} />
                  </div>
                </div>
              </Col>
              <Col lg={4} xl={4}>
                <Row>
                  <Col lg={24}>
                   
                    <div className="heading-card">
                      <br/><h4>&nbsp;&nbsp;1624396141816_...</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={24}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4>
                        &nbsp;&nbsp;James&nbsp;Dutrow&nbsp;
                        {/* <i className="fa">&nbsp;&#xf058;</i> */}
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={24}>
                    <div>
                      <h4>
                        &nbsp;&nbsp;235&nbsp;Views&nbsp;|&nbsp;9&nbsp;months&nbsp;ago
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Wrapper>
    </>
  );
}
