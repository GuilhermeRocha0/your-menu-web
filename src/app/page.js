import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar active={'home'} />

      <main className="bg-slate-800 m-20 p-12">
        <h2>Home</h2>
      </main>
    </>
  )
}
