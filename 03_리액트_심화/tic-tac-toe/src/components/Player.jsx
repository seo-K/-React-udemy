import React, { useState } from "react";

export default function Player({ Edit, name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [playerName, setPlayerName] = useState({ name });

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        placeholder="사용자명을 입력해주세요"
        value={playerName}
        onChange={(e) => {
          e.preventDefault();
          // setPlayerName(e.target.value);
        }}
        required
      />
    );
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button type="button" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
    //   <li className="player">
    //     {isEditing ? (
    //       <form>
    //  {playerNames}}
    //         <span className="player-symbol">{symbol}</span>
    //         <button type="button" onClick={() => setIsEditing(false)}>
    //           Save
    //         </button>
    //       </form>
    //     ) : (
    //       <React.Fragment>
    //         <span className="player-names">{playerName || name}</span>
    //         <span className="player-symbol">{symbol}</span>
    //         <button type="button" onClick={() => setIsEditing(true)}>
    //           Edit
    //         </button>
    //       </React.Fragment>
    //     )}
    //   </li>
  );
}
