import UserNavbar from '../../Navbar/Navbar';
import "./AdminCards.css";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function AdminCards() {
  return (
    <>
      <UserNavbar />
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
            <tr>
              <td>1</td>
              <td>What is ICT in full?</td>
              <td>Information Communication Technology</td>
              <td>
                <Link
                  to="#"
                  className="edit-icon"
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
            </tr>
            <tr>
              <td>2</td>
              <td>What is IT in full?</td>
              <td>Information Technology</td>
              <td>
                <Link
                  to="#"
                  className="edit-icon"
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
            </tr>
          </tbody>
        </table>
      </div>

    </>

  );
}