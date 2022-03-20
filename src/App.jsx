import styles from "./App.module.css";
import RichTextEditor from "./components/RichTextEditor";
import TextareaComments from "./components/TextareaComments";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className="k-mb-6">React Editor vs React Text Area</h1>
      <div className="k-mb-4">
        <TextareaComments />
      </div>
      <div>
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
