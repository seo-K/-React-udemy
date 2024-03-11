import { useState } from "react";
import Button from "./Button";

export default function ProjectView({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [taskValue, setTaskValue] = useState("");

  const handelTaskButton = () => {
    // if (enterTask.trim() !== "") {
    //   onAddTask(enterTask);
    //   setEnterTask("");
    // } else {
    //   alert("내용을 입력하셈");
    // }
    onAddTask({
      text: taskValue,
    });
    setTaskValue("");
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handelTaskButton();
    }
  };
  return (
    <div className="w-[35rem] mt-16 px-4">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">제목 : {project.title}</h1>

          <Button onClick={() => onDelete(project.id)}>삭제하기</Button>
        </div>
        <p className="mb-4 text-stone-400 text-left">날짜 : {formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap text-left">설명 : {project.description}</p>
      </header>

      <h1 className="text-3xl font-bold text-stone-600 mb-2 text-left">할일목록</h1>
      <div className="flex align-middle my-3">
        <input
          type="text"
          placeholder="새로운 할일"
          className="bg-stone-300 mr-2 flex-1"
          onChange={(e) => setTaskValue(e.target.value)}
          onKeyDown={handleEnter}
          value={taskValue}
        />
        <Button onClick={handelTaskButton}>추가하기</Button>
      </div>
      <ul className="bg-gray-400 p-2">
        {tasks?.length > 0 ? (
          <>
            {tasks?.map((task) => {
              return (
                <li className="flex align-middle justify-between" key={task.taskId}>
                  <p>{task.text}</p>
                  <button className="hover:text-red-500" onClick={() => onDeleteTask(task.taskId)}>
                    Clear
                  </button>
                </li>
              );
            })}
          </>
        ) : (
          <p>할일이 아직없네요요</p>
        )}
      </ul>
    </div>
  );
}
