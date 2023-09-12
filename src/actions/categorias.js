'use server'

import { revalidatePath } from 'next/cache'

export async function create(formData) {
  const url = 'http://localhost:8080/api/v1/categories'

  const options = {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch(url, options)

  if (resp.status !== 201) {
    const json = await resp.json()
    const errors = json.reduce(
      (str, error) => (str += error.message + '. '),
      ''
    )
    return { message: `Erro ao cadastrar categoria. ${errors}` }
  }

  revalidatePath('/categorias')
  return { success: 'ok' }
}
