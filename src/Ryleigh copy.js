import React, { useState, useEffect } from "react";

function Ryleigh() {
  let [ryimgId, setryimgId] = useState();

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    setryimgId(randomNumber);
    fetch(`/images/Ryleigh/image${ryimgId}.jpg`, { method: "Head" }).then((res) => {
      if (res.ok) {
        console.log("res ok");
        return ryimgId;
      } else {
        console.log("not ok");
        randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log(`NEw Random number ${randomNumber}`);
        return setryimgId(randomNumber);
      }
    });
  }, []);

  function getRyImage() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    setryimgId(randomNumber);
    console.log(randomNumber, ryimgId);
    fetch(`/images/Ryleigh/image${ryimgId}.jpg`, { method: "Head" }).then((res) => {
      if (res.ok) {
        console.log(`all good random number is ${ryimgId} compared to ${randomNumber}`);
        return ryimgId;
      } else {
        console.log("not ok");
        randomNumber = Math.floor(Math.random() * 3) + 1;
        setryimgId(randomNumber);
        console.log(`New Random number ${ryimgId} `);
        return ryimgId;
      }
    });
  }

  return (
    <div>
      <h3>Ryleigh and Grandpa</h3>
      <div>
        <img className="ryNoah-image" src={`/images/Ryleigh/image${ryimgId}.jpg`} alt="Ry and Grandpa Selfie" />
      </div>
      <button className="selfie-button" onClick={getRyImage}>
        Click To Show Another
      </button>
      <h4 className="return">Click Below to Return</h4>
    </div>
  );
}

export default Ryleigh;
