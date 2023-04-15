import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/forms/formsControls/input/Input";
import {required} from "../../utils/validators/validators";
import {loginTC} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {loginDataType} from "../../api/api";
import {Redirect} from "react-router-dom";
import {RootTypeReduxState} from "../../redux/redux-store";
import s from "./Login.module.css"
type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType
export const Login = (props: LoginPropsType) => {
  //let dispatch = useDispatch()
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

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
      {
        props.error && <div className={s.formCommonError}>{props.error}</div>
      }
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

export type MapDispatchToPropsType = {
  loginTC: (data: loginDataType) => void
}
type MapStateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: RootTypeReduxState): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const LoginContainer = connect(mapStateToProps, {loginTC})(Login)