import Button from "./Button";
export default function ProjectsSideBar({ onStartAddProject, onSelecteProject, projects, selectedProjectId }) {
  console.log(projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">당신의 프로젝트</h2>
      <div>
        <Button onClick={onStartAddProject}>+ 프로젝트 추가</Button>
      </div>
      <ul className="mt-8">
        {projects.map((item, index) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (item.id == selectedProjectId) {
            // tailwind 개 좋네?
            cssClasses += " bg-stone-800 text-stone-200";
            console.log(item.id, "얍");
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={index}>
              <button type="button" onClick={() => onSelecteProject(item.id)} className={cssClasses}>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
