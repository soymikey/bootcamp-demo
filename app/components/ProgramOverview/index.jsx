import React from "react";
import { Card, Col, Row } from "antd";
import Styles from "./index.module.css";

const programOverview = [
  { id: "1", title: "Coach", details: <a target="_blank">Alberto Nunez</a> },
  { id: "2", title: "Level", details: " Beginner,Novice,Intermediate" },
  { id: "3", title: "Equipment", details: "Full Gym" },
  { id: "4", title: "Time Per Week", details: "60 Minutes" },
  { id: "5", title: "Days Per Week", details: "4 Days" },
  { id: "6", title: "Program Length", details: "15 Weeks" },
];

const ProgramOverview = () => {
  return (
    <div className={Styles.cardWrapper}>
      <Card className={Styles.overview}>
        <div className={Styles.programOverview}>Program Overview</div>
        {programOverview?.map((i) => {
          return (
            <Row key={i.id}>
              <Col span={10}>
                <div className={Styles.overviewTitle}>{i.title}</div>
              </Col>
              <Col span={14}>
                <div className={Styles.overviewDetails}>{i.details}</div>
              </Col>
            </Row>
          );
        })}
      </Card>
    </div>
  );
};

export default ProgramOverview;
