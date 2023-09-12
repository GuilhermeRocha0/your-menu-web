import Button from '@/components/Button'

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col items-center gap-2 bg-slate-800 m-20 p-12">
        <h2>Ops. Página não encontrada</h2>
        <Button href="/">Voltar para home</Button>
      </main>
    </>
  )
}
