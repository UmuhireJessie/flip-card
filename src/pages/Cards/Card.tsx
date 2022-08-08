import React, { useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from 'react-redux';
import UserNavbar from "../../Navbar/Navbar";
import "./Card.css";
import { getAllCards } from "../../module/actions/CardActions";


export default class index extends React.Component<{}, { flipped, isData }> {
  constructor(props: any) {
    super(props);
    this.state = {
      flipped: new Set(),
      isData: props
    };

  }

  handleClick(id) {
    return (e) => {
      e.preventDefault();
      let flipped = new Set(this.state.flipped);
      console.log(">>>>>>>>>>",id, flipped);
      if (flipped.has(id)) {
        flipped.delete(id);
      } else {
        flipped.add(id);
      }
      console.log("End>>>>>>>>>>", id, flipped);
      this.setState({ flipped });
    };
  }

  render() {
    return (
      <>
        <UserNavbar />
        <div className="card-bg">
          <div className="allCards">

            {/* {this.state.isData?.allCards?.map((value, idx: number) => { */}
              {/* return ( */}
                <div className="card" >
                  <ReactCardFlip
                    isFlipped={this.state.flipped.has( 1)}
                    flipDirection="horizontal"
                  >
                    <div className="question">
                      <h1> Question</h1>
                      <p>question</p>
                      <button className="btn" onClick={this.handleClick( 1)}>Check Answer</button>
                    </div>
                    <div className="answer">
                      <h1> Answer</h1>
                      <p>answer </p>
                      <button className="btn" onClick={this.handleClick( 1)}>Check Question</button>
                    </div>
                  </ReactCardFlip>
                </div>
              {/* ) */}
            {/* })} */}

          </div>
        </div>
      </>


    );
  }
  
}
