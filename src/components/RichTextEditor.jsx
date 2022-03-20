import { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const RichTextEditor = props => {
  const [richText, setRichText] = useState("");

  const onChangeText = e => {
    setRichText(e.value);
  };

  return (
    <div>
      <div className="k-d-flex k-gap-8">
        <div className="k-flex-grow">
          <h2>Create Comment Form</h2>
          <form onSubmit={handleSubmit}>
            <Editor value={richText} onChange={onChangeText} rows={5} />
            <div className="k-form-buttons k-justify-content-end">
              <Button
                themeColor={"primary"}
                type={"submit"}
                disabled={!commentText}
              >
                Add comment
              </Button>
            </div>
          </form>
        </div>
        <div className="k-flex-grow">
          <h2>Parsed Editor Text</h2>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
