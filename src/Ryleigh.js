import React, { useState, useEffect } from "react";

function Ryleigh() {
  let [ryimgId, setryimgId] = useState(1);

  useEffect(() => {
    console.log("use effect ran");
    let randomNumber = Math.floor(Math.random() * 180) + 1;
    setryimgId(randomNumber);
  }, []);

  function getRyImage() {
    let randomNumber = Math.floor(Math.random() * 180) + 1;
    setryimgId(randomNumber);
  }

  return (
    <div>
      <h3>Ryleigh and Grandpa</h3>
      <div>
        <p>{ryimgId}</p>
        <img className="ryNoah-image" src={`/images/Ryleigh/Ryleigh${ryimgId}.jpg`} alt="Ry and Noah Selfies" />
      </div>
      <button className="selfie-button" onClick={getRyImage}>
        Click To Show Another
      </button>
      <h4 className="return">Click Below to Return</h4>
    </div>
  );
}

export default Ryleigh;
