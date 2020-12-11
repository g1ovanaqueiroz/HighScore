import React from 'react'
import RegisterHeader from '../Header/RegisterHeader'
import {ErrorMessage, Formik, Form, Field} from 'formik'
import './Register.css'
import * as yup from 'yup'

export default function Register() {
  const handleSubmit = values => console.log(values)
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  return ([
    <div className="register-container">
      <RegisterHeader/>
      <Formik 
      initialValues={{}} 
      onSubmit={handleSubmit} 
      validationSchema={validations}>
        <Form className="Register">
          <div className="Register-Group">
            <p><b>Nome:</b></p>
            <Field name="nome"
            className="Register-Field"
            title="Nome"
            />
            <p><b>Sobrenome:</b></p>
            <Field name="sobrenome"
            className="Register-Field"
            title="Sobrenome"
            />
            <p><b>Email:</b></p>
            <Field name="email"
            className="Register-Field"
            title="Email"
            />
            <ErrorMessage
            component="span"
            name="email"
            className="Register-Error"
            />
            <p><b>Senha:</b></p>
            <Field name="password"
            className="Register-Field"
            title="senha"
            size="8"
            maxlength="8"
            />
            <ErrorMessage
            component="span"
            name="password"
            className="Register-Error"
            />
            <button className="Register-btn" type="submit">Login</button>
            <a href='/register'>Já possui conta? Clique aqui para fazer login!</a>
          </div>
        </Form>
      </Formik>
    </div>
  ])
}