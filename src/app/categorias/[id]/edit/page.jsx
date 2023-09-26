import { getCategoria } from '@/actions/categorias'
import NavBar from '@/components/NavBar'
import FormEdit from './FormEdit'

export default async function ContaEdit({ params }) {
  const categoria = await getCategoria(params.id)

  return (
    <>
      <NavBar active="categorias" />
      <FormEdit categoria={categoria} />
    </>
  )
}
