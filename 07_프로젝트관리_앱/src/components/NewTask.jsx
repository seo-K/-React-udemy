import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enterTask, setEnterTask] = useState("");

  function handleChange(e) {
    setEnterTask(e.target.value);
  }

  const handleClick = () => {
    if (enterTask.trim() !== "") {
      onAddTask(enterTask);
      setEnterTask("");
    } else {
      alert("내용을 입력하셈");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <li className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        placeholder="새로운 할일"
        minLength={1}
        onChange={handleChange}
        onKeyDown={handleEnter}
        value={enterTask}
      />
      <button type="submit" className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
        추가하기
      </button>
    </li>
  );
}
