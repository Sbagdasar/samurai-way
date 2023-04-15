import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "./formsControls/textarea/Textarea";

export type FormDataAddPostFormType = {
  newPostBody: string
}
const maxLengthCreatorValidate = maxLengthCreator(10)

export const AddNewPostForm = (props: InjectedFormProps<FormDataAddPostFormType>) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field name={"newPostBody"} component={Textarea} placeholder={'Enter your post text'}
               validate={[required,maxLengthCreatorValidate ]}/>
        <div>
          <button>add post</button>
        </div>
      </form>
    </div>
  );
};

export const ReduxAddNewPostForm = reduxForm<FormDataAddPostFormType>({
  form: 'addMessage'
})(AddNewPostForm)