import NavBar from '@/components/NavBar'

export default function Admin() {
  return (
    <>
      <NavBar active={'admin'} />

      <main className="bg-slate-800 m-20 p-12">
        <h2>Admin</h2>
      </main>
    </>
  )
}
