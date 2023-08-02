import React from "react";
import { Card } from "antd";
import Image from "next/image";
import phone from "../../assets/img/phone.png";
import appStore from "../../assets/img/appStore.png";
import googlePlay from "../../assets/img/googlePlay.png";
import Styles from "./index.module.css";

const DownloadProgram = () => {
  return (
    <div className={Styles.cardWrapper}>
      <Card className={Styles.download}>
        <div className={Styles.downloadTitleWrapper}>
          <div className={Styles.downloadTitle}>
            Start the program on the Bootcamp for free
          </div>
        </div>
        <div>
          <div className={Styles.phoneWrapper}>
            <Image src={phone} alt="phone" className={Styles.phone} />
          </div>
          <div className={Styles.store}>
            <Image src={appStore} alt="appStore" className={Styles.appStore} />
            <Image
              src={googlePlay}
              alt="googlePlay"
              className={Styles.googlePlay}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DownloadProgram;
