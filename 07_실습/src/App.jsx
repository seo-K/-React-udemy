import { useState } from "react";
import Button from "./components/Button";
import NoProject from "./components/NoProject";
import ProjectForm from "./components/ProjectForm";
import ProjectView from "./components/ProjectView";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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

      // console.log(projectState);
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  // 프로젝트 생성 취소
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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

  // 프로젝트 삭제
  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      let newList = projectState.projects.filter((project) => project.id !== id);
      return {
        ...prevState,
        selectedProjectId: undefined, // null 새로운 프로젝트 추가
        projects: [...newList],
        // projects: prevState.projects.filter((project) => project.id !== projectStatus.selectedProjectId),
      };
    });
  }

  // 할일 추가
  function handleAddTask(newTaskData) {
    setProjectState((prevState) => {
      let taskId = Math.random();
      let newTask = { ...newTaskData, taskId: taskId, id: projectState.selectedProjectId };
      // const newTask = {
      //   text: text,
      //   projectId: prevState.selectedProjectId, // 선택된 애의 id값
      //   id: taskId,
      // };
      console.log(newTask);
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // 할일 삭제
  function handleDeleteTask(selectedId) {
    setProjectState((prev) => {
      let newList = projectState.tasks.filter((task) => task.taskId !== selectedId);
      console.log(newList, selectedId);
      return {
        ...prev,
        tasks: [...newList],
        // tasks: prevState.tasks.filter((task) => task.id !== targetId),
      };
    });
  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);
  const selectedTask = projectState.tasks.filter((task) => task.id === projectState.selectedProjectId);

  // console.log(selectedTask, projectState);

  let content = (
    <ProjectView project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={selectedTask} />
  );

  if (projectState.selectedProjectId === null) {
    content = <ProjectForm onAdd={handelAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject startProject={handleStartAddProject} />;
  }

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
                    className={
                      item.id === projectState.selectedProjectId
                        ? "w-full px-4 py-2 text-xs md:text-base rounded-md bg-slate-600 text-black  hover:bg-stone-400 hover:text-stone-600 mb-2"
                        : "w-full px-4 py-2 text-xs md:text-base rounded-md bg-slate-600 text-white  hover:bg-slate-400 hover:text-stone-800 mb-2"
                    }
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
