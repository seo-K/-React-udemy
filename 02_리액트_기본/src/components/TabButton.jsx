{
  /* <TabButton label="버튼내용 넣기"></TabButton> */
}
// export default function TabButton({ label }) {
//   function handleClick() {
//     console.log("눌림");
//   }
//   return (
//     <li>
//       <button type="button" onClick={handleClick}>
//         {label}
//       </button>
//     </li>
//   );
// }

{
  /* <TabButton>버튼내용 넣기</TabButton> */
}
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected && "active"} type="button" onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
