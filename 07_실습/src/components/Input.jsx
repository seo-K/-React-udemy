import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isText, ...props }, ref) {
  const textAreaClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase">{label}</label>
      {/* ref는 NewProject 컴포넌트에서 ref, ...props 는 각각의 type이나 placeholder */}
      {isText ? <textarea className={textAreaClasses} {...props} ref={ref} /> : <input className={textAreaClasses} {...props} ref={ref} />}
    </p>
  );
});

export default Input;
