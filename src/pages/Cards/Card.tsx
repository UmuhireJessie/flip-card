import React from "react";
import ReactCardFlip from "react-card-flip";
import UserNavbar from "../../Navbar/Navbar";
import "./Card.css";


export default class index extends React.Component<{}, { flipped }> {
  constructor(props: any) {
    super(props);
    this.state = {
      flipped: new Set()
    };
  }

  handleClick(id) {
    return (e) => {
      e.preventDefault();
      let flipped = new Set(this.state.flipped);
      if (flipped.has(id)) {
        flipped.delete(id);
      } else {
        flipped.add(id);
      }
      this.setState({ flipped });
    };
  }

  render() {
    return (
      <>
        <UserNavbar />
        <div className="card-bg">
          <div className="allCards">
            <div className="card">
              <ReactCardFlip
                isFlipped={this.state.flipped.has(1)}
                flipDirection="horizontal"
              >
                <div className="question">
                  <h1> Question</h1>
                  <p>What is ICT in full?</p>
                  <button className="btn" onClick={this.handleClick(1)}>Check Answer</button>
                </div>
                <div className="answer">
                  <h1> Answer</h1>
                  <p>Information Communication Technology </p>
                  <button className="btn" onClick={this.handleClick(1)}>Check Question</button>
                </div>
              </ReactCardFlip>
            </div>

            <div className="card">
              <ReactCardFlip
                isFlipped={this.state.flipped.has(2)}
                flipDirection="horizontal"
              >
                <div className="question">
                  <h1> Question</h1>
                  <p>What is IT in full?</p>
                  <button className="btn" onClick={this.handleClick(2)}>Check Answer</button>
                </div>
                <div className="answer">
                  <h1> Answer</h1>
                  <p>Information Technology </p>
                  <button className="btn" onClick={this.handleClick(2)}>Check Question</button>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </>


    );
  }
}
