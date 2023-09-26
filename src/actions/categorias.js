'use server'

import { revalidatePath } from 'next/cache'

const url = process.env.NEXT_PUBLIC_BASE_URL + '/categories'

export async function create(formData) {
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

export async function getCategories() {
  await new Promise(r => setTimeout(r, 5000))
  const resp = await fetch(url)
  return resp.json()
}

export async function destroy(id) {
  const urlDelete = url + '/' + id

  const options = {
    method: 'DELETE'
  }

  const resp = await fetch(urlDelete, options)

  if (resp.status !== 204)
    return { error: 'Erro ao apagar a categoria. ' + resp.status }

  revalidatePath('/categorias')
}

export async function getCategoria(id) {
  const getUrl = url + '/' + id

  const resp = await fetch(getUrl)

  if (resp.status !== 200) return { error: 'Erro ao buscar dados da categoria' }

  return await resp.json()
}

export async function update(categoria) {
  const updateUrl = url + '/' + categoria.id

  const options = {
    method: 'PUT',
    body: JSON.stringify(categoria),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch(updateUrl, options)

  if (resp.status !== 200) return { error: 'erro ao atualizar categoria' }

  revalidatePath('/categorias')
}
