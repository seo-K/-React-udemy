import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancle }) {
  const modal = useRef();

  // useState 는 값이 바뀔때마다 재랜더링을하는데, useRef는 그렇지않음.
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [alertText, setAlertText] = useState("");

  function handleSave() {
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

    // 데이터 저장
    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption={"닫기"}>
        <p className="text-xl text-stone-600 my-4">
          <b className="font-bold">{alertText}</b> 을/를 입력하세요!
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              type="button"
            >
              취소
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              type="button"
              onClick={handleSave}
            >
              저장
            </button>
          </li>
        </menu>
        <div>
          <Input
            ref={title}
            label="제목"
            type="text"
            placeholder="제목을 입력해주세요"
            required
          />
          <Input
            ref={description}
            label="설명"
            isTextarea
            placeholder="설명을 입력해주세요"
            required
          />
          <Input ref={dueDate} label="마감기한" type="date" />
        </div>
      </div>
    </>
  );
}
