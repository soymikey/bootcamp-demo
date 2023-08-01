import styles from "./page.module.css";
import { Button } from "antd";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button type="primary">Button</Button>
    </main>
  );
}
