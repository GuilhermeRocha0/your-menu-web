import NavBar from '@/components/NavBar'
import CategoryRow from '@/components/CategoryRow'
import Button from '@/components/Button'
import { PlusIcon } from '@heroicons/react/24/outline'
import { getCategories } from '@/actions/categorias'

export default async function Categorias() {
  const categories = await getCategories()

  return (
    <>
      <NavBar active={'categorias'} />

      <main className="bg-slate-800 mt-10 p-9 rounded max-w-xl m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-slate-100 text-2xl">Categorias</h2>
          <Button href="/categorias/new">
            <PlusIcon className="h-6 w-6" />
            criar conta
          </Button>
        </div>
        <div id="data">
          {categories.map(category => (
            <CategoryRow key={category.id} data={category} />
          ))}
        </div>
      </main>
    </>
  )
}
