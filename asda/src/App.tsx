import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Estas segura? :(",
  "Muy segura?",
  "Pensalo bien, te doy una chance",
  "Dale toca que si",
  "Me voy a poner muy triste :(",
  "Me estas rompiendo el corazon :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

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
          <img className="imagen" src="./img/imagen.jpeg" alt="" />
          <div className="text">Te amo</div>
          <a
            className="text-n2"
            href="https://65e4e54fffad92d6791801ac--helpful-biscochitos-097bff.netlify.app/"
          >
            Entra a este link mi amor
          </a>
        </>
      ) : (
        <>
          <img
            src="https://www.icegif.com/wp-content/uploads/bear-kissing-icegif-1.gif"
            alt=""
          />

          <div>Te extraño y te amo. ¿Me amas? :D</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
