import React, { useState, useEffect } from "react";

function Ryleigh() {
  let [ryimgId, setryimgId] = useState(1);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 182) + 1;
    setryimgId(randomNumber);
  }, []);

  function getRyImage() {
    let randomNumber = Math.floor(Math.random() * 182) + 1;
    setryimgId(randomNumber);
  }
  function previous() {
    let newId = ryimgId - 1;
    setryimgId(newId);
  }
  function next() {
    let newId = ryimgId + 1;
    setryimgId(newId);
  }
  return (
    <div>
      <h3>Ryleigh and Grandpa</h3>
      <div>
        <p className="id">{ryimgId}</p>
        <img className="ry-image" src={`/images/Ryleigh/Ryleigh${ryimgId}.jpg`} alt="Ry and Noah Selfies" />
      </div>

      <div className="one-selfie">
        <img onClick={previous} className="arrow" src="./images/arrow-left.png" alt="left arrow" />
        <button className="selfie-button" onClick={getRyImage}>
          Click for random photo or arrow for previous or next
        </button>
        <img onClick={next} className="arrow" src="./images/arrow-right.png" alt="right arrow" />
      </div>
      <h4 className="return">Click Below to Return</h4>
    </div>
  );
}

export default Ryleigh;
