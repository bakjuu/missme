import { useState } from "react";
import "./App.css";
import IMG_1 from "./images/IMG_1.gif";
import Final from "./images/Final.gif";
// const images = [
//   IMG_1,
//   IMG_2,
//   IMG_3,
//   IMG_4,
//   IMG_5,
//   IMG_6,
//   IMG_7,
//   IMG_8,
//   IMG_9,
//   IMG_10,
//   IMG_11,
// ];

const phrases = [
  "No 🙉",
  "진심이야?",
  "이럴거야?",
  "Really Sure😢",
  "보고싶잖아..😕",
  "이러지마.. Please🥺",
  "다시 한번 생각해봐🫤",
  "I'm gonna cry..😭",
  "진심이 아니잖아..😭",
  "You are breaking my heart😭💔",
  "난 넌무 보고잡다..😭💔",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;
  // const randomImage = images[Math.floor(Math.random() * images.length)];

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
          <div className="text">B, I miss U ALREADY.. A LOT</div>
        </>
      ) : (
        <>
          <div className="image-container">
            <img src={IMG_1} alt="Randomized Heart" />
          </div>

          <div className="text">Do you miss me already? 🌹?</div>
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
