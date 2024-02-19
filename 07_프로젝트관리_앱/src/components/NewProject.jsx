import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex ">
        <li>
          <button type="button">취소</button>
        </li>
        <li>
          <button type="button">저장</button>
        </li>
      </menu>
      <div>
        <Input label="제목" type="text" placeholder="제목을 입력해주세요" required />
        <Input label="설명" isTextarea placeholder="설명을 입력해주세요" required />
        <Input label="마감기한" type="date" />
      </div>
    </div>
  );
}
