import React from "react";
import Image from "next/image";
import { Col, Row, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import Styles from "./page.module.css";
import Poster from "./assets/img/poster.png";
import Youtube from "./assets/img/youtube.png";
import phone from "./assets/img/phone.png";
import appStore from "./assets/img/appStore.png";
import googlePlay from "./assets/img/googlePlay.png";
import getData from "./api";

const programOverview = [
  { id: "1", title: "Coach", details: <a target="_blank">Alberto Nunez</a> },
  { id: "2", title: "Level", details: " Beginner,Novice,Intermediate" },
  { id: "3", title: "Equipment", details: "Full Gym" },
  { id: "4", title: "Time Per Week", details: "60 Minutes" },
  { id: "5", title: "Days Per Week", details: "4 Days" },
  { id: "6", title: "Program Length", details: "15 Weeks" },
];

async function Home() {
  const program = await getData();
  const { title, subTitle, description } = program.data;

  return (
    <div className={Styles.home}>
      <Row justify={"center"}>
        <Col sm={18} xs={23}>
          <Row>
            <Col sm={14} xs={24}>
              <div className={Styles.imageWrapper}>
                <Image src={Poster} alt="poster" className={Styles.poster} />
              </div>
            </Col>
          </Row>
          <Row align={"middle"}>
            <Col className={Styles.title} sm={18} xs={24}>
              <h1> {title}</h1>
            </Col>
            <Col sm={6} xs={24}>
              <div className={Styles.review}>
                <StarFilled style={{ color: "#fdb401" }} /> 4.35 (89 reviews)
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>{subTitle}</p>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col sm={16} xs={24}>
              <h2>Program Description</h2>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
              <div>
                <Image src={Youtube} alt="youtube" className={Styles.youtube} />
              </div>
            </Col>

            <Col sm={8} xs={24}>
              <Row justify={"center"}>
                <Col sm={20} xs={24}>
                  <div className={Styles.cardWrapper}>
                    <Card className={Styles.overview}>
                      <div className={Styles.programOverview}>
                        Program Overview
                      </div>
                      {programOverview?.map((i) => {
                        return (
                          <Row key={i.id}>
                            <Col span={10}>
                              <div className={Styles.overviewTitle}>
                                {i.title}
                              </div>
                            </Col>
                            <Col span={14}>
                              <div className={Styles.overviewDetails}>
                                {i.details}
                              </div>
                            </Col>
                          </Row>
                        );
                      })}
                    </Card>
                  </div>
                  <div className={Styles.cardWrapper}>
                    <Card className={Styles.download}>
                      <div className={Styles.downloadTitleWrapper}>
                        <div className={Styles.downloadTitle}>
                          Start the program on the Bootcamp for free
                        </div>
                      </div>
                      <div>
                        <div className={Styles.phoneWrapper}>
                          <Image src={phone} alt="" className={Styles.phone} />
                        </div>
                        <div className={Styles.store}>
                          <Image
                            src={appStore}
                            alt="appStore"
                            className={Styles.appStore}
                          />
                          <Image
                            src={googlePlay}
                            alt="googlePlay"
                            className={Styles.googlePlay}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
