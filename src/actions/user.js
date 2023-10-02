'use server'

import { cookies } from 'next/headers'

export async function apiLogin(credenciais) {
  const url = 'https://your-menu-production.up.railway.app/api/login'

  const options = {
    method: 'POST',
    body: JSON.stringify(credenciais),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch(url, options)

  if (resp.status !== 200) return { error: 'Credenciais inválidas' }

  const json = await resp.json()

  cookies().set('your_menu_token', json.token, {
    maxAge: 60 * 60 * 24 * 7 // 7 dias
  })
}

export async function apiLogout() {
  cookies().delete('your_menu_token')
}
