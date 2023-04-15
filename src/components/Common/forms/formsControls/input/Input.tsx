import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from '../FormControls.module.css'
export const Input:React.FC<WrappedFieldProps> = ({ input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={`${s.formControl} ${hasError ? s.error: ''}`}>
      <div>
        <input {...input} {...props}></input>
      </div>
      {
        hasError && <span>{meta.error}</span>
      }
    </div>
  );
};

