import "./App.css";

function Home() {
  const photoPath1 = (props) => {
    const pathNumber = Math.floor(Math.random() * 2) + 1;
    let photoNumber = Math.floor(Math.random() * 182) + 1;
    console.log(`running function path number: ${pathNumber} photonumber : ${photoNumber}`);
    if (pathNumber === 2) {
      return <img className="ryNoah-image" src={`/images/Ryleigh/Ryleigh${photoNumber}.jpg`} alt="Ry and Grandpa Selfie" />;
    } else {
      return <img className="ryNoah-image" src={`/images/Noah/Noah${photoNumber}.jpg`} alt="Noah and Grandpa Selfie" />;
    }
  };
  let alt = photoPath1().props.alt;
  let srcPath1 = photoPath1().props.src;
  let srcPath2 = photoPath1().props.src;
  let srcPath3 = photoPath1().props.src;
  let srcPath4 = photoPath1().props.src;
  let srcPath5 = photoPath1().props.src;
  let srcPath6 = photoPath1().props.src;
  let srcPath7 = photoPath1().props.src;
  let srcPath8 = photoPath1().props.src;

  return (
    <div>
      <img className="home-image" src="/images/john.jpg" alt="selfie-John-Ry-Noah" />
      <div className="home-image-random-1">
        <img className="ryNoah-image" src={srcPath1} alt={alt} />
        <img className="ryNoah-image" src={srcPath2} alt={alt} />
        <img className="ryNoah-image" src={srcPath3} alt={alt} />
        {/* <img className="ryNoah-image" src={srcPath4} alt={alt} /> */}
      </div>
      <div className="home-image-random-2">
        <img className="ryNoah-image" src={srcPath5} alt={alt} />
        <img className="ryNoah-image" src={srcPath6} alt={alt} />
        <img className="ryNoah-image" src={srcPath7} alt={alt} />
        {/* <img className="ryNoah-image" src={srcPath8} alt={alt} /> */}
      </div>
      <h4 className="click-below">Click Below to see Noah or Ryleigh Selfies</h4>
    </div>
  );
}

export default Home;
