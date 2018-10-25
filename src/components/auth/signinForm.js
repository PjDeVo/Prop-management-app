import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SigninForm extends Component {
  render() {
    return (
      <form className="sign-in-form">
        <FormTitle className="sign-in-form__title" text="Login" />
        <Field
          className="sign-in-form__email"
          placeholder="Enter Email"
          name="email"
          type="email"
          title='Email'
          component={FormInput}
        />

        <Field
          className="sign-in-form__password"
          placeholder="Enter Password"
          name="password"
          type="password"
          title='password'
          component={FormInput}
        />

        <Field
          className="sign-in-form__login"
          name="login"
          type="submit"
          title='Login'
          component={FormButton}
        />
        <div className='sign-in-form__text-links'>
          <TextLink to='/forgot password' text='Forgot Password' />
          <TextLink to='/signup password' text='Not a Member? Register Here' />
        </div>
      </form>
    );
  }
}

SigninForm = reduxForm({
  form: "signin"
})(SigninForm);


export default SigninForm;

