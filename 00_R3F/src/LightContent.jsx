import * as THREE from "three";
import React, { useEffect } from "react";

// light
import LightAmbientLight from "./light/LightAmbientLight";
import LightDirectionalLight from "./light/LightDirectionalLight";
import LightHemisphereLight from "./light/LightHemisphereLight";
import LightSpotLight from "./light/LightSpotLight";
import LightPointLight from "./light/LightPointLight";
import LightRectAreaLight from "./light/LightRectAreaLight";
import LightEnvironment from "./light/LightEnvironment";

function LightContent({ selectedLight }) {
  const LightComponents = [
    {
      light: "LightAmbientLight",
      component: <LightAmbientLight />,
    },
    {
      light: "LightDirectionalLight",
      component: <LightDirectionalLight />,
    },
    {
      light: "LightHemisphereLight",
      component: <LightHemisphereLight />,
    },
    {
      light: "LightSpotLight",
      component: <LightSpotLight />,
    },
    {
      light: "LightPointLight",
      component: <LightPointLight />,
    },
    {
      light: "LightRectAreaLight",
      component: <LightRectAreaLight />,
    },
    {
      light: "LightEnvironment",
      component: <LightEnvironment />,
    },
  ];

  return <>{LightComponents.map((item, index) => (selectedLight === item.light ? React.cloneElement(item.component, { key: item.light + "_light" }) : null))}</>;
}

export default LightContent;
