export function Input({
  label,
  id,
  name,
  type,
}: {
  label: string;
  id: string;
  name: string;
  type?: string | undefined;
}) {
  return (
    <div>
      <label for={id}>{label}</label>
      <input id={id} name={name} type={type} />
    </div>
  );
}
