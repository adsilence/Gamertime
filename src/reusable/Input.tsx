export function Input({
  label,
  name,
  id = name,
  type,
}: {
  label: string;
  name: string;
  id?: string;
  type?: string | undefined;
}) {
  return (
    <div>
      <label class="label" for={id}>
        {label}
      </label>
      <input class="input input-bordered" id={id} name={name} type={type} />
    </div>
  );
}
