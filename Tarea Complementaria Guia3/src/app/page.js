import styles from "./page.module.css";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>
            La hora de las  compra a llegado 
          </p>
          <br></br>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}
