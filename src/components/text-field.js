import React from 'react';
import { ErrorMessage, useField } from "formik";
import '../App.css'

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    //render input fields through props
    return (
        <div>
            <div className="login">
                <label className="label" htmlFor={field.name}>{label}</label>
                <input className="text-inputs" {...field} {...props} />
            </div>
            <div className="error">
                <ErrorMessage name={field.name} />
            </div>
        </div>
    );
};

export default TextField;