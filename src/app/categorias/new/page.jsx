'use client'

import Button from '@/components/Button'
import InputText from '@/components/InputText'
import NavBar from '@/components/NavBar'
import { CheckIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { redirect } from 'next/navigation'

export default function FormContas() {
  const [error, setError] = useState('')

  async function handleSubmit(formData) {
    const resp = await create(formData)

    if (!resp.success) {
      setError(resp.message)
      return
    }

    redirect('/categorias')
  }

  return (
    <>
      <NavBar active="contas" />

      <main className="bg-slate-800 mt-20 m-auto p-12 rounded max-w-lg">
        <h2 className="text-2xl text-slate-100">Cadastrar Categoria</h2>

        <form action={handleSubmit} className="flex flex-col gap-4">
          <InputText label="Nome" id="name" name="name" />

          <div className="flex justify-around">
            <Button href="/categorias" variant="secondary">
              <ChevronLeftIcon className="h-6 w-6 " />
              cancelar
            </Button>
            <Button type="button">
              <CheckIcon className="h-6 w-6" />
              salvar
            </Button>
          </div>

          <span className="text-red-500">{error}</span>
        </form>
      </main>
    </>
  )
}
