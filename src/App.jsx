import styles from "./App.module.css";
import RichTextEditor from "./components/RichTextEditor";
import TextareaMessage from "./components/TextareaMessage";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className="k-mb-6">React Editor vs React Text Area</h1>
      <div className="k-mb-4">
        <TextareaMessage />
      </div>
      <div>
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
