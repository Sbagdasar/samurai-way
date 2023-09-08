import React from 'react';
import s from "components/Profile/ProfileInfo/ProfileContacts/Contacts.module.css";
import {Button} from "antd";
import {ProfileContacts, updateContactsTC} from "redux/reducers/profile-reducer";
import {createField} from "components/Common/forms/formsControls/createField/createField";
import {Input} from "components/Common/forms/formsControls/input/Input";
import {InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "utils/ReduxHelpers";

type EditContactsPT={
   contacts: ProfileContacts
  setEditMode?: (value:boolean)=>void
}
 export const EditContacts = (props:EditContactsPT) => {
   let dispatch = useAppDispatch()

   const onSubmitFormHandler = (formData: any) => {

    dispatch( updateContactsTC(formData))
    // @ts-ignore
    // props.setEditMode(false)
  }
  return (
    <div className={s.contactsBlock}>
      <Button onClick={()=>props.setEditMode && props.setEditMode(true)}>Edit contacts</Button>
      <ContactsForm initialValues={props.contacts} onSubmit={onSubmitFormHandler} contacts={props.contacts} />
    </div>
  );
};
type ECFType = InjectedFormProps<{},EditContactsPT>& EditContactsPT
const EditContactsForm:React.FC< ECFType>= (props) => {
  return (

    <form onSubmit={props.handleSubmit}>
      <ul className={s.editContactsList}>
        {
          Object.entries(props.contacts).map(item=> {
            let itemName = item.toString().split(',')[0]
            return(
              <li key={item[0]} className={props.error == itemName ? s.error : '' }>
                {createField(item+'', item+'' , [], Input, null)}
              </li>
            )
          })
        }
      </ul>

      <div>
        {props.error && <div>{props.error}</div>}
        <button>
          Save
        </button>
      </div>
    </form>
  )
}

const ContactsForm =  reduxForm<{},EditContactsPT>({form:'edit-contacts'})(EditContactsForm)