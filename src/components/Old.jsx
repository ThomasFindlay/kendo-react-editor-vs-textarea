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

// const max = 255;
// const textAreaValidator = value => (!value ? "Please enter a comment." : "");

// const FormTextArea = fieldRenderProps => {
//   const {
//     validationMessage,
//     touched,
//     label,
//     id,
//     valid,
//     disabled,
//     hint,
//     type,
//     optional,
//     max,
//     value,
//     ...others
//   } = fieldRenderProps;
//   const showValidationMessage = touched && validationMessage;
//   const showHint = !showValidationMessage && hint;
//   const hindId = showHint ? `${id}_hint` : "";
//   const errorId = showValidationMessage ? `${id}_error` : "";
//   return (
//     <FieldWrapper>
//       <Label
//         editorId={id}
//         editorValid={valid}
//         editorDisabled={disabled}
//         optional={optional}
//       >
//         {label}
//       </Label>
//       <div className={"k-form-field-wrap k-relative"}>
//         <TextArea
//           valid={valid}
//           type={type}
//           id={id}
//           disabled={disabled}
//           maxLength={max}
//           rows={4}
//           ariaDescribedBy={`${hindId} ${errorId}`}
//           {...others}
//         />
//         <Hint
//           direction={"end"}
//           style={{
//             position: "absolute",
//             right: 0,
//           }}
//         >
//           {value.length} / {max}
//         </Hint>
//         {showHint && <Hint id={hindId}>{hint}</Hint>}
//         {showValidationMessage && (
//           <Error id={errorId}>{validationMessage}</Error>
//         )}
//       </div>
//     </FieldWrapper>
//   );
// };

const TextareaComments = props => {
  const [comments, setComments] = useState([
    "hello world",
    "how are you doing?",
  ]);

  const handleSubmit = dataItem => {
    console.log("submit", dataItem);
    setComments(prevState => [...prevState, dataItem.comment]);
  };

  return (
    <div
      style={
        {
          // maxWidth: "25rem",
        }
      }
    >
      <div className="k-d-flex k-gap-8">
        <div className="k-flex-grow">
          <h2>Create Comment Form</h2>
          {/* <Form
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={formRenderProps => {
              return (
                <FormElement>
                  <fieldset className={"k-form-fieldset"}>
                    <Field
                      id={"comment"}
                      name={"comment"}
                      label={"Create comment"}
                      max={max}
                      value={formRenderProps.valueGetter("comment")}
                      hint={"Hint: Enter your comment here"}
                      component={FormTextArea}
                      validator={textAreaValidator}
                    />
                    <div className="k-form-buttons k-justify-content-end">
                      <Button
                        themeColor={"primary"}
                        type={"submit"}
                        disabled={!formRenderProps.allowSubmit}
                      >
                        Add comment
                      </Button>
                    </div>
                  </fieldset>
                </FormElement>
              );
            }}
          /> */}
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
