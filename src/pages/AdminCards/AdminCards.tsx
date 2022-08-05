import UserNavbar from '../../Navbar/Navbar';
import "./AdminCards.css";
import { HiPencil, HiTrash } from "react-icons/hi";
import CreateQuestion from "./modals/Create";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Update from './modals/Update';
import { getAllCards } from '../../module/actions/CardActions';

function AdminCards(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [IsUpdate, setUpdate] = useState(false);
  const [cardData, setCardData] = useState({});
  const { isData } = props;

  useEffect(() => {
    props.getAllCards();
  }, [])
  
  console.log("/////////", props.isData.allCards)
  return (
    <>
      <UserNavbar />
      <button className='btn-create' onClick={() => {
        setIsOpen(true);
        console.log("clicked");
      }}>Create Q/A</button>

      <div className="table-card">
        <table className='table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          { isData?.allCards?.map((value, idx:number) => {
            return (<tr key={idx}>
              <td>{idx + 1}</td>
              <td>{value.question}</td>
              <td>{value.answer}</td>
              <td>
                <Link
                  to="#"
                  className="edit-icon"
                  onClick={() => {
                    setUpdate(true);
                    setCardData({
                      id: value.id,
                      question: value.question,
                      answer: value.answer
                    })
                  }}
                  >
                    <HiPencil />
                  </Link>

                <Link
                  to="#"
                  className="delete-icon"
                  >
                    <HiTrash />
                  </Link>
              </td>
            </tr>)
          })}
          </tbody>
        </table>
      </div>

      {isOpen && <CreateQuestion setIsOpen={setIsOpen} />}
      {IsUpdate && (
            <Update setUpdate={setUpdate} cardData={cardData} />
          )}

    </>

  );
}

const mapState = ({ cardReducer }) => ({
  isData: cardReducer.data,
  isLoaded: cardReducer.isLoaded,
});

export default connect(mapState, {
  getAllCards: getAllCards
})(AdminCards);
