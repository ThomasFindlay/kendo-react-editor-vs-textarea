import { useState } from "react";
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Label, Hint, Error } from "@progress/kendo-react-labels";
import { TextArea } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

const initialValues = {
  comment: "",
};

const TextareaComments = props => {
  const [comments, setComments] = useState([
    "hello world",
    "how are you doing?",
  ]);
  const [commentText, setCommentText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setComments(prevState => [...prevState, commentText]);
    setCommentText("");
  };

  const onChangeText = e => {
    setCommentText(e.value);
  };

  return (
    <div>
      <div className="k-d-flex k-gap-8">
        <div className="k-flex-grow">
          <h2>Create Comment Form</h2>
          <form onSubmit={handleSubmit}>
            <TextArea value={commentText} onChange={onChangeText} rows={5} />
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
          <h2>Comments</h2>
          <ul className="k-list k-list-ul">
            {comments.map((comment, idx) => {
              return (
                <li className="k-list-item" key={idx}>
                  {idx + 1} - {comment}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextareaComments;
