import React, { useState, useEffect } from "react";

function Noah() {
  let [noahimgId, setnoahimgId] = useState(1);

  useEffect(() => {
    console.log("use effect ran");
    let randomNumber = Math.floor(Math.random() * 297) + 1;
    setnoahimgId(randomNumber);
  }, []);

  function getNoahImage() {
    let randomNumber = Math.floor(Math.random() * 297) + 1;
    setnoahimgId(randomNumber);
  }

  return (
    <div>
      <h3>Noah and Grandpa</h3>
      <div>
        <p className="id">{noahimgId}</p>
        <img className="ry-image" src={`/images/Noah/Noah${noahimgId}.jpg`} alt="Ry and Noah Selfies" />
      </div>
      <button className="selfie-button" onClick={getNoahImage}>
        Click To Show Another
      </button>
      <h4 className="return">Click Below to Return</h4>
    </div>
  );
}

export default Noah;
