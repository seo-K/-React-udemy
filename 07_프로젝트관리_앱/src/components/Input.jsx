import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
  const textAreaClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  const value = forwardRef();
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-50">{label}</label>
      {isTextarea ? <textarea ref={ref} className={textAreaClasses} {...props} /> : <input ref={ref} className={textAreaClasses} {...props} />}
    </p>
  );
});

export default Input;
