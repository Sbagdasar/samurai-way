import {Field} from "redux-form";
import React from "react";

export const createField = (placeholder: string | null, name: string | null, validators: any[], component: React.ReactNode, props:any, text='') => (
    <div>
      <Field name={name?.split(',')[0]} component={component}
             validate={validators}
             placeholder={placeholder?.split(',')[0]} {...props} /> {text}
    </div>

  );

