import React from 'react'
import LoginHeader from '../Header/LoginHeader'
import {ErrorMessage, Formik, Form, Field} from 'formik'
import './Login.css'
import * as yup from 'yup'

export default function Login() {
  const handleSubmit = values => console.log(values)
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  return ([
    <div className="login">
      <LoginHeader/>
      <Formik 
      initialValues={{}} 
      onSubmit={handleSubmit} 
      validationSchema={validations}>
        <Form className="Form">
          <div className="Form-Group">
            <p><b>Email:</b></p>
            <Field name="email"
            className="Form-Field"
            title="Email"
            />
            <ErrorMessage
            component="span"
            name="email"
            className="Form-Error"
            />
            <p><b>Senha:</b></p>
            <Field name="password"
            className="Form-Field"
            title="senha"
            size="8"
            maxlength="8"
            />
            <ErrorMessage
            component="span"
            name="password"
            className="Form-Error"
            />
            <button className="Form-btn" type="submit">Login</button>
          </div>

          <a href='/register'>Ainda não é cadastrado? Clique aqui para se cadastrar!</a>
        </Form>
      </Formik>
    </div>
  ])
}