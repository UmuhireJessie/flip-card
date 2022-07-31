import UserNavbar from "../../Navbar/Navbar";
import "./Card.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  let id:number;
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <UserNavbar />

      <div className="allCards">
        <div className="card-container">
          <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
            <div className="question">
              <h1> Question</h1>
              <p>What is ICT in full?</p>
              <button onClick={handleClick}>Check Answer</button>
            </div>
            <div className="answer">
              <h1> Answer</h1>
              <p>Information Communication Technology </p>
              <button onClick={handleClick}>Check Question</button>
            </div>
          </ReactCardFlip>
        </div>

        <div className="card-container">
          <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
            <div className="question">
              <h1> Question</h1>
              <p>What is IT in full?</p>
              <button onClick={handleClick}>Check Answer</button>
            </div>
            <div className="answer">
              <h1> Answer</h1>
              <p>Information Technology </p>
              <button onClick={handleClick}>Check Question</button>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}
export default Card;