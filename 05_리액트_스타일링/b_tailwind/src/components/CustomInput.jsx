export default function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <label invalid={invalid}>{label}</label>
      <input {...props} invalid={invalid} />
    </p>
  );
}
