import "./style.css";

import React from "react";

const Link = (props) => {
  const { returnedLink, linkText } = props;
  return (
    <div className="link">
      <a
        href={returnedLink}
        children={linkText}
        // the bleow code is to open link in new tab
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

export default Link;
