import React from "react";

import Link from "./Link";

const PrankLink = () => {
  const getUrl = () => {
    const links = [
        "https://www.youtube.com/watch?v=oHg5SJYRHA0",
        "https://www.youtube.com/watch?v=QTT5iHCHSn0",
        "https://www.youtube.com/watch?v=fC7oUOUEEi4"
    ];
    const link = links[Math.floor(Math.random() * links.length)];
    return link;
  };

  return (
    <Link url={getUrl()} title={"video"} />
  );
};

export default PrankLink;