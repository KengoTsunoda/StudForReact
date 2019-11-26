import React from "react";
import "./detail.css";

export default props => {
  const { displayData } = props;
  return (
    <div className="detail">
      {displayData ? (
        <>
          <h2>{displayData.author}'s photo.</h2>
          <img src={displayData.download_url} alt="download_url" />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
