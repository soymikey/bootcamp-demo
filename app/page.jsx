"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Row, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import Styles from "./page.module.css";
import Poster from "./assets/img/poster.png";
import Youtube from "./assets/img/youtube.png";

import getData from "./api";
import ProgramOverview from "./components/ProgramOverview";
import DownloadProgram from "./components/DownloadProgram";

function HomePage() {
  const [program, setProgram] = useState({});
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    (async function () {
      const program_ = await getData();
      setProgram(program_.data);
    })();
  }, []);

  if (typeof window !== "undefined") {
    window.onload = () => {
      document.getElementById("holderStyle").remove();
    };
  }
  return (
    <>
      {/* to avoid flash on first loaded */}
      <style
        id="holderStyle"
        dangerouslySetInnerHTML={{
          __html: `
                    *, *::before, *::after {
                        transition: none!important;
                    }
                    `,
        }}
      />

      <div
        className={Styles.home}
        style={{ visibility: !mounted ? "hidden" : "visible" }}
      >
        {/* poster section */}
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
                <h1> {program.title}</h1>
              </Col>
              <Col sm={6} xs={24}>
                <div className={Styles.review}>
                  <StarFilled style={{ color: "#fdb401" }} /> 4.35 (89 reviews)
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p>{program.subTitle}</p>
              </Col>
            </Row>
            {/* program description section */}
            <Row justify={"center"}>
              <Col sm={16} xs={24}>
                <h2>Program Description</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: program.description }}
                ></div>
                <div>
                  <Image
                    src={Youtube}
                    alt="youtube"
                    className={Styles.youtube}
                  />
                </div>
              </Col>
              {/* program overview section */}
              <Col sm={8} xs={24}>
                <Row justify={"center"}>
                  <Col sm={20} xs={24}>
                    <ProgramOverview />
                    {/* download section  */}
                    <DownloadProgram />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage;
