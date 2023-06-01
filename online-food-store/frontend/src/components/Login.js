import React from "react";
import Button from './Button'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }} 
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Minimum 6 characters').max(12, 'Maximum 12 characters').required('Password is required'),

      })}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      <div className="container">
        <div className="form">
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-control input" />
              <small><ErrorMessage name="email" /></small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control input" />
              <small><ErrorMessage name="password" /></small>
            </div>            
            <Button type='submit' className='signup-form' text='Submit' />
          </Form>
        </div>
      </div>
    </Formik>
  )
}

export default Login;