import React, { Component } from "react";
import Button from "./Button";

export default function ProjectsSideBar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">당신의 프로젝트 </h2>
      <div>
        <Button onClick={onStartAddProject}>+ 프로젝트 추가</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
