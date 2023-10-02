'use client'

import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

export default function NavBar({ active }) {
  const { user, logout } = useContext(AuthContext)
  const { push } = useRouter()

  function handleLogout() {
    logout()
    push('/login')
  }

  return active != 'home' ? (
    <nav className="flex justify-between items-center bg-slate-800 px-4 py-2">
      <ul id="links" className="flex items-end gap-14 text-slate-500">
        <li>
          <Link href="/">
            <h1 className="text-2xl font-bold text-slate-100">Your Menu</h1>
          </Link>
        </li>
        <li>
          <Link
            className={active == 'categorias' && 'text-slate-300'}
            href="/categorias"
          >
            Categorias
          </Link>
        </li>
        <li>
          <Link className={active == 'itens' && 'text-slate-300'} href="/itens">
            Itens
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <span>{user?.email}</span>
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
        </div>
        <Button onClick={handleLogout} type="button" variant="secondary">
          Log Out
        </Button>
      </div>
    </nav>
  ) : (
    <nav className="flex justify-between items-center bg-slate-800 px-4 py-2">
      <Link href="/">
        <h1 className="text-2xl font-bold text-slate-100">Your Menu</h1>
      </Link>
      <ul id="links" className="flex items-end gap-14 text-slate-500">
        <li>
          <a className="" href="#">
            Categoria 1
          </a>
        </li>
        <li>
          <a className="" href="#">
            Categoria 2
          </a>
        </li>
        <li>
          <a className="" href="#">
            Categoria 3
          </a>
        </li>
      </ul>
    </nav>
  )
}
