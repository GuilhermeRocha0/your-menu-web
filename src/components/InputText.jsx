export default function InputText({
  label,
  id,
  name,
  register = () => {},
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        {...register(name)}
        type="text"
        id={id}
        {...props}
        className="bg-slate-700 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-rose-500"
      />
    </div>
  )
}
