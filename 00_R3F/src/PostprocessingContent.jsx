import * as THREE from "three";
import React, { useEffect, useState } from "react";
import Post_BrightnessContrast from "./postprocessing/Post_BrightnessContrast";
import Post_DotScreen from "./postprocessing/Post_DotScreen";
import Post_Bloom from "./postprocessing/Post_Bloom";

function PostprocessingContent({ selectedPostprocessing }) {
  const PostComponents = [
    {
      postprocessing: "색상",
      component: <Post_BrightnessContrast />,
    },
    {
      postprocessing: "각도/크기",
      component: <Post_DotScreen />,
    },
    {
      postprocessing: "빛나는_효과",
      component: <Post_Bloom />,
    },
  ];

  return (
    <>
      {PostComponents.map((item) =>
        selectedPostprocessing === item.postprocessing ? React.cloneElement(item.component, { key: item.postprocessing + "_postprocessing" }) : null
      )}
    </>
  );
}

export default PostprocessingContent;
