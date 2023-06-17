import {Field} from "redux-form";
import React from "react";

export const createField = (placeholder: string|null, name: string, validators: any[], component: React.ReactNode, props:any, text='') => (
    <div>
      <Field name={name} component={component}
             validate={validators}
             placeholder={placeholder} {...props} /> {text}
    </div>

  );

