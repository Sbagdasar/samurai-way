import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/forms/formsControls/input/Input";
import {required} from "../../utils/validators/validators";
import {loginTC} from "../../redux/reducers/auth-reducer";
import {useDispatch} from "react-redux";

type FormDataType = {
  email:string
  password:string
  rememberMe:boolean
}
export const Login = () => {
  let dispatch = useDispatch()
  const onSubmit = (formData: FormDataType) => {
    dispatch(loginTC(formData))
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm : React.FC<InjectedFormProps<FormDataType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} validate={[required]} name={'email'} type="text" placeholder={'Email'}/>
      </div>
      <div>
        <Field component={Input} validate={[required]} name={'password'} type="password" placeholder={'Password'}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type="checkbox"/> remember me
      </div>
      <div>
        <button>
          login
        </button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)