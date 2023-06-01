import React from "react";
import Button from "./Button";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        gender: '',
        password: ''
      }} 
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is required'),
        gender: Yup.string().required('Please select your Gender'),
        password: Yup.string().min(6, 'Minimum 6 characters').max(12, 'Maximum 12 characters').required('Password is required'),

      })}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      <div className="container main">
        <div className="form">
          
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" className="form-control input" />
              <small><ErrorMessage name="name" /></small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-control input" />
              <small><ErrorMessage name="email" /></small>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <Field name="phone" type="tel" className="form-control input" />
              <small><ErrorMessage name="phone" /></small>
            </div>
            <div className="form-group">
              <div>
              <label htmlFor="gender">
                <Field name="gender" type="radio" value="male" className="form-check-input" />
                Male
              </label>
              <label htmlFor="gender">
                <Field name="gender" type="radio" value="female" className="form-check-input" />
                Female
              </label>
              <label htmlFor="gender">
                <Field name="gender" type="radio" value="other" className="form-check-input" />
                Other
              </label>
              </div>
              <small><ErrorMessage name="gender" /></small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control input" />
              <small><ErrorMessage name="password" /></small>
            </div>            
            <Button type='submit' className='button-form' text='Submit' />
          </Form>
        </div>
      </div>
    </Formik>
  )
}

export default Signup;