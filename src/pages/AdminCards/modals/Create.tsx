import "./Modals.css";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { useState } from "react";
import { postCard } from "../../../module/actions/CardActions";
import { toast } from "react-toastify";

function CreateQuestion(props) {

    const [isQuestion, setQuestion] = useState("");
    const [isAnswer, setAnswer] = useState("");
    const [error, setError] = useState({});

    const FormValidation = () => {
        if (isQuestion == "") {
            setError({ question: "Question is required" });
            return true;
        }
        if (isAnswer == "") {
            setError({ answer: "Answer is required" });
            return true;
        }
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!FormValidation()) {
            const data = {
                question: isQuestion,
                answer: isAnswer,
            };
            props.postCard(data);
            props.setIsOpen(false);
        } else {
            toast.error("All fields are required");
        }
    };
    return (
        <>
            <div className="main-add">
                <ImCross
                    className="close-icon"
                    onClick={() => {
                        props.setIsOpen(false);
                    }}
                />
                <div className="card-create">
                    <form onSubmit={(e) => HandleSubmit(e)}>
                        <h3 className="create-title">Create Question and Answer</h3>
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
                                placeholder="Answer"
                                id="answer"
                                name="answer"
                                value={isAnswer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            <div>
                                <button className="btn-save" type="submit">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default connect(null, {
    postCard: postCard,
})(CreateQuestion);
