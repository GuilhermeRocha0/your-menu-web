'use client'
import { create, update } from '@/actions/categorias'
import Button from '@/components/Button'
import InputText from '@/components/InputText'
import { CheckIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { redirect } from 'next/navigation'

export default function FormEdit({ categoria }) {
  const [error, setError] = useState('')
  const [categoriaEdit, setCategoriaEdit] = useState(categoria)

  async function handleSubmit() {
    const resp = await update(categoriaEdit)

    if (resp?.error) {
      setError(resp.error)
      return
    }

    redirect('/categorias')
  }

  function handleFieldEdit(field, value) {
    setCategoriaEdit({
      ...categoriaEdit,
      [field]: value
    })
  }

  return (
    <main className="bg-slate-800 mt-20 m-auto p-12 rounded max-w-lg">
      <h2 className="text-2xl text-slate-100">Editar Categoria</h2>

      <form action={handleSubmit} className="flex flex-col gap-4">
        <InputText
          label="Nome"
          id="name"
          name="name"
          value={categoriaEdit.name}
          onChange={e => handleFieldEdit('name', e.target.value)}
        />

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
  )
}
