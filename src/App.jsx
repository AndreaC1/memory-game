import { useState } from 'react'
import './App.css'
const imgPaths = import.meta.glob("../images/*")
const images = Object.keys(imgPaths);
import Heading from './components/Heading'


function App() {


  const [currentScore, setCurrentScore] = useState(0);
  const [clickedImage, setClickedImage] = useState([])
  const [bestScore, setBestScore] = useState(0);

  const [image, setImage] = useState(images)


  let img;

  function markClicked(img) {

    if (clickedImage.includes(img)) {
      if (bestScore < currentScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setClickedImage([]);
    } else {
      setClickedImage([...clickedImage, img])
      setCurrentScore((currentScore) + 1);
    }
  }

  function checkIfSeen() {

    if (clickedImage.includes(img)) {
      setCurrentScore((currentScore) + 1);
    }
    else {
      if (bestScore < currentScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setClickedImage([]);
    }
  }
  function displayImage() {
    let randomImage = Math.floor(Math.random() * image.length);
    img = image[randomImage];
    return img;
  }

  return (
    <>

      <Heading />
      <div id="scoreboard">
        <h2>Curent Score {currentScore}  </h2>

        <h2>Best Score {bestScore}</h2>
      </div>
      <div id="imageContainer">
      <img src={displayImage()} alt="" onClick={() => markClicked(img)} />
      </div>

      <button id="Repeated" onClick={() => checkIfSeen()}>Repeated</button>

    </>
  )
}

export default App
