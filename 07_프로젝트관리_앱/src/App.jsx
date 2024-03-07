import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  // project 가 있나 확인하고, projectList를 따로 나열하는 대단한 아이
  const [projectStatus, setProjectStatus] = useState({
    selectedProjectId: undefined, // undefined 아무것도 하지 않고 있음
    projects: [],
    // date: "2024-03-12"
    // description: "2"
    // id: 0.8361237981022189
    // title: "3"
  });

  // 프로젝트 선택
  function handleSelectProject(id) {
    console.log(id);
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id, // null 새로운 프로젝트 추가
      };
    });
  }

  // 프로젝트 생성 시작
  function handleStartAddProject() {
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // null 새로운 프로젝트 추가
      };
    });
  }

  // 프로젝트 생성 취소
  function handleCancelAddProject() {
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // 프로젝트 추가
  function handleAddProject(projectData) {
    setProjectStatus((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined, // null에서 전환하여, 프로젝트 화면 분기처리
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // 프로젝트 삭제
  function handleDeleteProject() {
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== projectStatus.selectedProjectId),
      };
    });
    console.log("delete project");
  }

  // 컨텐츠 영역
  const selectedProject = projectStatus.projects.find((project) => project.id === projectStatus.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />; // 기본은 선택된 프로젝트 뷰

  // 프로젝트가 있는지 없는지 확인
  if (projectStatus.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectStatus.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectStatus.projects}
        onSelectedProject={handleSelectProject}
        selectedProjectId={projectStatus.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
