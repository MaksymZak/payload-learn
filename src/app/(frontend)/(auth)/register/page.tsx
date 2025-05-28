import React from 'react'
import RegisterForm from '../_componets/register-form'

export default function RegisterPage() {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}
