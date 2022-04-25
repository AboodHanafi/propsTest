import "./style.css";

import React from "react";

const H3 = (props) => {
  const { h3Title, h3Text } = props;
  return (
    <div className="h3">
      <h3 title={h3Title}>{h3Text}</h3>
    </div>
  );
};

export default H3;
