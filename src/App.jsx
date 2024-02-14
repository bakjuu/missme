import { useState } from "react";
import "./App.css";
import IMG_1 from "./images/IMG_1.jpeg";
import IMG_2 from "./images/IMG_2.JPG";
import IMG_3 from "./images/IMG_3.PNG";
import IMG_4 from "./images/IMG_4.JPG";
import IMG_5 from "./images/IMG_5.JPG";
import IMG_6 from "./images/IMG_6.JPG";
import IMG_7 from "./images/IMG_7.JPG";
import IMG_8 from "./images/IMG_8.JPG";
import IMG_9 from "./images/IMG_9.jpeg";
import IMG_10 from "./images/IMG_10.JPG";
import IMG_11 from "./images/IMG_11.JPG";
import Final from "./images/myvalentine.gif";
const images = [
  IMG_1,
  IMG_2,
  IMG_3,
  IMG_4,
  IMG_5,
  IMG_6,
  IMG_7,
  IMG_8,
  IMG_9,
  IMG_10,
  IMG_11,
];

const phrases = [
  "No 🙉",
  "진심이야?",
  "이럴거야?",
  "Really Sure😢",
  "I'll be very sad😕",
  "이러지마.. Please🥺",
  "Don't do this to me🫤",
  "I'm gonna cry..😭",
  "진심이 아니잖아..😭",
  "You are breaking my heart😭💔",
  "마이 묵었따..😭💔",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;
  const randomImage = images[Math.floor(Math.random() * images.length)];

  function handleYesClick() {
    setYesPressed(true);
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <div className="image-container">
            <img src={Final} alt="bear-Kissing" />
          </div>
          <div className="text">B, My Valentine!</div>
        </>
      ) : (
        <>
          <div className="image-container">
            <img src={randomImage} alt="Randomized Heart" />
          </div>

          <div className="text">Will you be my forever valentine 🌹?</div>
          <div className="both-Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "rgb(248, 229, 89)",
              }}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button className="NoButton" style={{}} onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
