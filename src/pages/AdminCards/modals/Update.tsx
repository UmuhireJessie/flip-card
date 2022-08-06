import "./Modals.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { updateCard } from "../../../module/actions/CardActions";
import { toast, ToastContainer } from "react-toastify";

function Update(props) {
  const card = props.cardData;
  const [isQuestion, setQuestion] = useState(card ? card.question : "");
  const [isAnswer, setAnswer] = useState(card ? card.answer : "");

  console.log(card);
  const FormValidation = () => {
    if (isQuestion == "") return true;
    if (isAnswer == "") return true;
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    FormValidation();
    if (!FormValidation()) {
      const Data = {
        question: isQuestion,
        answer: isAnswer,
      };
      props.updateCard(Data, card.id);
      toast.info("Card updated Successfully");
      props.setUpdate(false);
    } else {
      toast.error("Fill missing record");
    }
  };
  return (
    <>
      <div className="main-add">
        <ImCross
          className="close-icon"
          onClick={() => {
            props.setUpdate(false);
          }}
        />
        <div className="card">
          <form onSubmit={(e) => HandleSubmit(e)}>
            <h3 className="create-title">Update Card</h3>
            <div>
              <br />
              <input
                className="input-question"
                placeholder="Question"
                id="question"
                name="question"
                value={isQuestion}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <input
                className="input-answer"
                placeholder="answer"
                id="answer"
                name="answer"
                value={isAnswer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <div>
                <div className="card-btn">
                  <button className="btn btn-green btn-update">
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default connect(null, {
  updateCard: updateCard,
})(Update);
