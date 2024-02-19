import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectStatus, setProjectStatus] = useState({
    selectedProjectId: undefined, // undefined 아무것도 하지 않고 있음
    projects: [],
  });

  function handleStartAddProject() {
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // null 새로운 프로젝트 추가
      };
    });
  }

  let content;

  if (projectStatus.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectStatus.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
