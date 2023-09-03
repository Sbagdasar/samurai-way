import React from 'react';
import s from "components/Profile/ProfileInfo/ProfileContacts/Contacts.module.css";
import {Button} from "antd";
import {ProfileContacts, updateContactsTC} from "redux/reducers/profile-reducer";
import {createField} from "components/Common/forms/formsControls/createField/createField";
import {Input} from "components/Common/forms/formsControls/input/Input";
import {InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";

type EditContactsPT={
   contacts: ProfileContacts
  setEditMode?: (value:boolean)=>void
}
 export const EditContacts = (props:EditContactsPT) => {
  let dispatch = useDispatch()
  const onSubmitFormHandler = (formData: any) => {

    dispatch( updateContactsTC(formData))
    // @ts-ignore
    props.setEditMode(false)
  }
  return (
    <div className={s.contactsBlock}>
      <Button onClick={()=>props.setEditMode && props.setEditMode(true)}>Edit contacts</Button>
      <ContactsForm initialValues={props.contacts} onSubmit={onSubmitFormHandler} contacts={props.contacts}/>
    </div>
  );
};
type ECFType = InjectedFormProps<{},EditContactsPT>& EditContactsPT
const EditContactsForm:React.FC< ECFType>= (props) => {
const {} =props
  return (
    <form onSubmit={props.handleSubmit}>
      {
        Object.entries(props.contacts).map(item=> {
          return(
            <li key={item[0]}>{createField(item+'', item+'' , [], Input, null)}</li>
          )
        })
      }
      <div>
        <button>
          Save
        </button>
      </div>
    </form>
  )
}

const ContactsForm =  reduxForm<{},EditContactsPT>({form:'edit-contacts'})(EditContactsForm)