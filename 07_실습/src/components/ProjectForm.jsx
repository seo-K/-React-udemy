import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function ProjectForm({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [alertText, setAlertText] = useState("");

  let projectList = [];

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDate = dueDate.current.value;

    let newAlertText = "";

    if (enteredTitle.trim() === "") {
      newAlertText += "제목, ";
    }
    if (enteredDesc.trim() === "") {
      newAlertText += "내용, ";
    }
    if (enteredDate.trim() === "") {
      newAlertText += "날짜, ";
    }

    // alertText의 마지막 ', '를 제거합니다.
    newAlertText = newAlertText.replace(/, $/, "");

    if (newAlertText !== "") {
      setAlertText(newAlertText);
      modal.current.open();

      return;
    }

    projectList = {
      title: enteredTitle,
      description: enteredDesc,
      date: enteredDate,
    };
    onAdd(projectList);

    // onAdd({
    //   title: enteredTitle,
    //   description: enteredDesc,
    //   date: enteredDate,
    // });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption={"닫기"}>
        <p className="text-xl text-stone-600 my-4">
          <b className="font-bold">{alertText}</b> 을/를 입력하세요!
        </p>
      </Modal>
      <div className="w-full mt-16 px-4">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" type="button" onClick={onCancel}>
              취소
            </button>
          </li>
          <li>
            <Button onClick={handleSave}>저장</Button>
          </li>
        </menu>
        <div className="text-left">
          <Input ref={title} label="제목" type="text" placeholder="제목" defaultValue="TITLE" />
          <Input ref={description} isText label="내용" placeholder="내용" defaultValue="DESC" />
          <Input ref={dueDate} label="날짜" type="date" defaultValue="2022-02-02" />
        </div>
      </div>
    </>
  );
}
