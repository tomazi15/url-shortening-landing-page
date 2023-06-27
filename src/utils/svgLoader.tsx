import React from "react";

import { ReactComponent as RecognitionLogo } from "../images/icon-brand-recognition.svg";
import { ReactComponent as RecordsLogo } from "../images/icon-detailed-records.svg";
import { ReactComponent as CustomizableLogo } from "../images/icon-fully-customizable.svg";

const svgMap = [RecognitionLogo, RecordsLogo, CustomizableLogo];

const svgLoader = (index: any) => {
  let Logo = svgMap[index];

  return <Logo role="test" />;
};

export default svgLoader;
