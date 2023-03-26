import React from 'react';
import {Field, reduxForm} from "redux-form";

export const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm = (props:any) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} type="text" placeholder={'Login'}/>
      </div>
      <div>
        <Field component={'input'} name={'password'} type="password" placeholder={'Password'}/>
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type="checkbox"/> remember me
      </div>
      <div>
        <button>
          login
        </button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)