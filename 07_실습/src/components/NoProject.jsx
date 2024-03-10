import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ startProject }) {
  return (
    <>
      <img src={noProjectImg} alt="프로젝트가 없음" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">선택된 프로젝트가 없습니다.</h2>
      <p className="text-stone-400 mb-4">새로운 프로젝트를 추가해보세요.</p>

      <Button onClick={startProject}>프로젝트 추가</Button>
    </>
  );
}
