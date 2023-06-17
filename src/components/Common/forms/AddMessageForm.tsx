import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "./formsControls/textarea/Textarea";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField} from "./formsControls/createField/createField";
export type FormDataAddMessageType={
  newMessageBody:string
}
const maxLengthCreatorValidate = maxLengthCreator(100)
export const AddMessageForm = (props:InjectedFormProps<FormDataAddMessageType>) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {createField('Enter your message', "newMessageBody",[required,maxLengthCreatorValidate], Textarea, null )}
        <button>send message</button>
      </form>
    </div>

  );
};

export const ReduxAddMessageForm = reduxForm<FormDataAddMessageType>({
  form: 'addMessage'
})(AddMessageForm)