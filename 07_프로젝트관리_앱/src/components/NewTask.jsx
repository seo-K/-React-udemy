import { useState } from "react";

export default function NewTask() {
  const [enterTask, setEnterTask] = useState("");

  function handleChange(e) {
    setEnterTask(e.target.value);
  }

  console.log(enterTask);

  function onAddTask() {
    if (enterTask.trim().length !== 0) {
      alert("할일 추가 완료!");
      setEnterTask("");
    } else {
      alert("할일을 입력해주세요!");
    }
  }
  return (
    <li className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        placeholder="새로운 할일"
        minLength={1}
        onChange={handleChange}
        value={enterTask}
        onKeyDown={enterTask}
      />
      <button type="submit" className="text-stone-700 hover:text-stone-950" onClick={onAddTask}>
        추가하기
      </button>
    </li>
  );
}
