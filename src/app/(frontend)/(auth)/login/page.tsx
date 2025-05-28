import React from 'react'
import LoginForm from '../_componets/login-form'

export default function LoginPage() {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
