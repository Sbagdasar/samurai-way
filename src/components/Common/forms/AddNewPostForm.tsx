import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataAddPostFormType={
  newPostBody:string
}

export const AddNewPostForm = (props:InjectedFormProps<FormDataAddPostFormType>) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field name={"newPostBody"} component={'textarea'} placeholder={'Enter your post text'}/>
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