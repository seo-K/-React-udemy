import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  console.log(tasks);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">할일 목록</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 ? (
        <ul className="p-3 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  type="button"
                  className="text-stone- 700 hover:text-red-500"
                  onClick={() => {
                    onDeleteTask(task.id);
                  }}
                  // onClick={onDeleteTask(task.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">아직 마땅히 할 일이 없네요...</p>
      )}
    </section>
  );
}
