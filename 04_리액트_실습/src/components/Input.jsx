import React, { useState } from "react";

export default function Input({ initialValue, label, id, onChangeValue }) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    onChangeValue(id, e.target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} onChange={handleChange} value={inputValue} required />
    </div>
  );
}
