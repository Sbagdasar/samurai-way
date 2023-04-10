import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
export type FormDataAddMessageType={
  newMessageBody:string
}

export const AddMessageForm = (props:InjectedFormProps<FormDataAddMessageType>) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field name={"newMessageBody"} component={'textarea'} placeholder={'Enter your message'}/>
        <button>send message</button>
      </form>
    </div>

  );
};

export const ReduxAddMessageForm = reduxForm<FormDataAddMessageType>({
  form: 'addMessage'
})(AddMessageForm)