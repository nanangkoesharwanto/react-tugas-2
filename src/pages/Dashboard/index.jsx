import Navbar from "../../components/Navbar";
import Footer from "../../templates/Footer";
import About from "../About";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import ScrollButton from '../../components/Button/ScrollButton';

const Dashboard = ({ dataManager }) => {
  return (
    <>
      <Navbar dataManager={dataManager} />
      <About dataManager={dataManager} />
      <Profile dataManager={dataManager} />
      <Login dataManager={dataManager} />
      <Register dataManager={dataManager} />
      <Footer dataManager={dataManager} />
      <ScrollButton />
    </>
  );
};

export default Dashboard;
