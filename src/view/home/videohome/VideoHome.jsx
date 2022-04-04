import React from "react";
import YouTube from "react-youtube";
import { Row, Col } from "antd";
import VerticalVideoCard from "../../../components/verticalVideoCard/VerticalVideoCard";
import { Wrapper } from "./VideoHome.styled";
import "material-icons/iconfont/material-icons.css";

export default function VideoHome() {
  const opts = {
    width: "100%",
    height: "384px",
    
  };
  return (
    <>
      <Wrapper>
        <Row>
          <Col style={{marginTop:"13px"}}
           xl={16} lg={16} md={24} sm={24} xs={24}>
            <YouTube videoId="2g811Eo7K8U" opts={opts} />;
            <Row>
              <Col lg={24}>
                <div className="text-u-tube">
                  <h1>The Batman</h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={16} xl={14} md={24} sm={24} xs={24}>
                <div className="views-box">
                  <p>114 views</p>
                </div>
              </Col>
              <Col lg={8} xl={10} md={24} sm={24} xs={24}>
                <div>
                  <div className="like-share-section">
                    <div className="like">
                      <p>
                        <span className="material-icons-outlined md-18">
                          thumb_up
                        </span>{" "}
                        <span className="text-like-share-section">{0}</span>
                      </p>
                    </div>
                    <div className="dislike">
                      <p>
                        <span className="material-icons-outlined md-18">
                          thumb_down
                        </span>
                        <span className="text-like-share-section">{0}</span>
                      </p>
                    </div>
                    <div className="heart">
                      <p>
                        <span className="material-icons-outlined md-18">
                          favorite_border
                        </span>{" "}
                        <span className="text-like-share-section">{0}</span>
                      </p>
                    </div>
                    <div className="playlist">
                      <p>
                        <span className="material-icons-outlined md-18">
                          playlist_add
                        </span>
                      </p>
                    </div>
                    <div className="code">
                      <p>
                        <span className="material-icons-outlined md-18">
                          code
                        </span>
                      </p>
                    </div>
                    <div className="share">
                      <p>
                        <span className="material-icons-outlined md-18">
                          share
                        </span>
                      </p>
                    </div>
                    <div className="threedots">
                      <p>
                        <span className="material-icons-outlined md-18">
                          more_horiz
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <br />
            </Row>
            <Row>
              <Col lg={24}>
                <div></div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xl={8} md={24} sm={24} xs={24}>
            <VerticalVideoCard />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}
