import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">제목 : {project.title}</h1>
          <button className="text-stone-500 hover:text-strong-950" onClick={onDelete}>
            삭제하기
          </button>
        </div>
        <p className="mb-4 text-stone-400">날짜 : {formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">설명 : {project.description}</p>
      </header>
      <Tasks tasks={project?.tasks} />
    </div>
  );
}
