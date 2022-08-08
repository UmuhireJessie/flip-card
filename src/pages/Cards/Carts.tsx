import ReactCardFlip from "react-card-flip";
import UserNavbar from "../../Navbar/Navbar";
import { connect } from "react-redux";
import "./Card.css";
import { getAllCards } from "../../module/actions/CardActions";
import { useEffect, useState } from "react";

function Carts(props) {
    const { isData } = props;

    useEffect(() => {
        props.getAllCards();
    }, [])

    const [flipped, setFlipped] = useState(new Set());
    let flip = new Set(flipped);

    const handleClick = (id) => {
        if (flip.has(id)) {
            flip.delete(id);
        } else {
            flip.add(id);
        }
        setFlipped(flip)
    }
    return (
        <>
            <UserNavbar />
            <div className="card-bg">
                <div className="allCards">

                    {isData?.allCards?.map((value, idx: number) => {
                        return (
                            <div className="card" key={idx}>
                                <ReactCardFlip
                                    isFlipped={flipped.has(idx + 1)}
                                    flipDirection="horizontal"
                                >
                                    <div className="question">
                                        <h1> Question</h1>
                                        <p>{value.question}</p>
                                        <button className="btn" onClick={() => {handleClick(idx + 1)}}>Check Answer</button>
                                    </div>
                                    <div className="answer">
                                        <h1> Answer</h1>
                                        <p>{value.answer} </p>
                                        <button className="btn" onClick={() => handleClick(idx + 1)}>Check Question</button>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}


const mapState = ({ cardReducer }) => ({
    isData: cardReducer.data,
});

export default connect(mapState, {
    getAllCards: getAllCards
})(Carts);