import "./home.css";
import UserNavbar from "../../Navbar/Navbar";


function Home() {
  return (
    <div>
      <UserNavbar />
        <div className="home-content">
          <h3>Welcome to the </h3>
          <h3 className="title">Flip Card Project</h3>
        </div>
    </div>
  );
}
export default Home;