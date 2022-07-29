import "./home.css";
import UserNavbar from "../../Navbar/Navbar";
// import Image from "../../image/Background.png";

function Home() {
  return (
    <div>
      <UserNavbar />
      <div className="home">
        <div className="home-content">
          {/* <img src={Image} alt=""></img> */}
          <h3>Welcome to the Flip Card Project!</h3>
        </div>
      </div>
    </div>
  );
}
export default Home;