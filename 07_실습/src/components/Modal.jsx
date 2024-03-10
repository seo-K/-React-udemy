import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // showModal() 은 dialog 자체 기능
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}

      {buttonCaption && (
        <form method="dialog" className="mt-4 text-right">
          <Button type="button" aria-label="close" onClick={() => dialog.current.close()}>
            {buttonCaption}
          </Button>
        </form>
      )}
    </dialog>,
    document.getElementById("modal-root") // #modal-root 에 해당 모달 설치
  );
});
export default Modal;
