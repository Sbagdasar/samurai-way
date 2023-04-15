import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from '../FormControls.module.css'
export const Textarea:React.FC<WrappedFieldProps> = ({ input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={`${s.formControl} ${hasError ? s.error: ''}`}>
      <div>
        <textarea {...input} {...props}></textarea>
      </div>
      {
        hasError && <span>{meta.error}</span>
      }
    </div>
  );
};

