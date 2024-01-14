export function Input({
  label,
  id,
  name,
}: {
  label: string;
  id: string;
  name: string;
}) {
  return (
    <div>
      <label for={id}>{label}</label>
      <input id={id} name={name} />
    </div>
  );
}
