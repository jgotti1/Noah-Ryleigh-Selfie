import React, { useState, useEffect } from "react";

function Noah() {
  let [noahimgId, setnoahimgId] = useState(1);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 297) + 1;
    setnoahimgId(randomNumber);
  }, []);

  function getNoahImage() {
    let randomNumber = Math.floor(Math.random() * 297) + 1;
    setnoahimgId(randomNumber);
  }
  function previous() {
    let newId = noahimgId - 1;
    setnoahimgId(newId);
  }
  function next() {
    let newId = noahimgId + 1;
    setnoahimgId(newId);
  }
  return (
    <div>
      <h3>Noah and Grandpa</h3>
      <div>
        <p className="id">{noahimgId}</p>
        <img className="ry-image" src={`/images/Noah/Noah${noahimgId}.jpg`} alt="Ry and Noah Selfies" />
      </div>
      <div className="one-selfie">
        <img onClick={previous} className="arrow" src="./images/arrow-left.png" alt="left arrow" />
        <button className="selfie-button" onClick={getNoahImage}>
          Click for random photo or arrow for previous or next
        </button>
        <img onClick={next} className="arrow" src="./images/arrow-right.png" alt="right arrow" />
      </div>
      <h4 className="return">Click Below to Return</h4>
    </div>
  );
}

export default Noah;
