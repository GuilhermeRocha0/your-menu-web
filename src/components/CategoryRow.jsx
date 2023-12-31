import DropMenu from '@/components/DropMenu'

export default function CategoryRow({ data }) {
  return (
    <div
      id="data-row"
      className="flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-slate-700 group"
    >
      <div className="flex gap-2 items-center">
        <span>{data.name}</span>
      </div>
      <div className="flex items-center">
        <div className="invisible group-hover:visible">
          <DropMenu categoriaId={data.id} />
        </div>
      </div>
    </div>
  )
}
