import { useState } from "react";
import Button from "./components/Button";
import NoProject from "./components/NoProject";
import ProjectForm from "./components/ProjectForm";
import ProjectView from "./components/ProjectView";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // 프로젝트 생성 시작
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // null 새로운 프로젝트 추가
      };
    });
  }
  // 프로젝트 추가
  const handelAddProject = (newProjectData) => {
    setProjectState((prevState) => {
      let projectId = Math.random();

      let newProject = { ...newProjectData, id: projectId };

      console.log(projectState);
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  // 프로젝트 추가 취소
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // null 새로운 프로젝트 추가
      };
    });
  }

  // 프로젝트 선택
  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // setProjectStatus((prevState) => {
  //   const projectId = Math.random();

  //   const newProject = {
  //     ...projectData,
  //     id: projectId,
  //   };
  //   console.log(newProject);

  //   return {
  //     ...prevState,
  //     selectedProjectId: undefined, // null에서 전환하여, 프로젝트 화면 분기처리
  //     projects: [...prevState.projects, newProject],
  //   };
  // });
  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

  let content = <ProjectView project={selectedProject} />;

  // content = <NoProject startProject={handleStartAddProject} />;

  if (projectState.selectedProjectId === null) {
    content = <ProjectForm onAdd={handelAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject startProject={handleStartAddProject} />;
  }

  console.log(projectState.selectedProjectId);

  return (
    <div className="flex align-middle py-5 h-svh ">
      <aside className="side-bar rounded-r-lg w-1/3 bg-slate-500 p-3">
        <h1 className="font-bold text-lg text-white mb-4">프로젝트 리스트</h1>
        <Button onClick={handleStartAddProject}>프로젝트 추가</Button>
        <ul className="mt-4">
          {projectState.projects.length > 0 &&
            projectState.projects.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className="w-full px-4 py-2 text-xs md:text-base rounded-md bg-slate-600 text-white  hover:bg-slate-400 hover:text-stone-800 mb-2"
                    onClick={() => {
                      handleSelectedProject(item.id);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </aside>
      <main className="mt-24 text-center w-2/3 flex-shrink-0">{content}</main>
    </div>
  );
}

export default App;
