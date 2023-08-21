import Link from 'next/link'

export default function NavBar({ active, logged }) {
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
            categorias
          </Link>
        </li>
        <li>
          <Link className={active == 'itens' && 'text-slate-300'} href="/itens">
            itens
          </Link>
        </li>
      </ul>

      <input
        className="text-slate-300 rounded-lg border-2 border-slate-300 px-4 py-2 hover:bg-rose-500 hover:border-transparent hover:text-slate-100"
        type="button"
        value="Log Out"
      />
    </nav>
  ) : (
    <nav className="flex justify-between items-center bg-slate-800 px-4 py-2">
      <Link href="/">
        <h1 className="text-2xl font-bold text-slate-100">Your Menu</h1>
      </Link>
      <ul id="links" className="flex items-end gap-14 text-slate-500">
        <li>
          <a className="" href="#">
            categoria 1
          </a>
        </li>
        <li>
          <a className="" href="#">
            categoria 2
          </a>
        </li>
        <li>
          <a className="" href="#">
            categoria 3
          </a>
        </li>
      </ul>
    </nav>
  )
}
