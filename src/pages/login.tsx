import React from "react"
import LoginForm from '../components/LoginForm'
import Layout from '../components/Layout'
import Matrix from '../components/Matrix'


const LoginPage = () => (
   <>
   <Matrix />
   <Layout>
      <LoginForm />
   </Layout>
   </>
)

export default LoginPage