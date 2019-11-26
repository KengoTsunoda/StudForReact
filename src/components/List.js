import React from "react";
import "./list.css";

export default props => {
  const { data, handleDisplayData } = props;
  return (
    <ul>
      {data.map(v => {
        return <li onClick={() => handleDisplayData(v.id)}>{v.author}</li>;
      })}
    </ul>
  );
};
