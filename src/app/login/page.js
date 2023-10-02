'use client'

import Button from '@/components/Button'
import InputText from '@/components/InputText'

import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import toast from 'react-hot-toast'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { login } = useContext(AuthContext)

  async function onSubmit(data) {
    const resp = await login(data)

    if (resp?.error) {
      toast.error(resp.error)
    }
  }

  return (
    <div className="flex h-screen">
      <aside className="hidden lg:flex"></aside>

      <main className="flex flex-col items-center justify-center gap-10 w-screen">
        <h1 className="text-5xl font-bold">Your Menu</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-start"
        >
          <InputText register={register} name="email" label="Email" />
          <InputText
            register={register}
            name="senha"
            label="Senha"
            type="password"
          />

          <Button type="button">Entrar</Button>
        </form>
      </main>
    </div>
  )
}
