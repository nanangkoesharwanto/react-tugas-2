import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [home, setHome] = useState("block");
  const [dashboard, setDashboard] = useState("none");
  const [about, setAbout] = useState("none");
  const [profile, setProfile] = useState("none");
  const [login, setLogin] = useState("none");
  const [register, setRegister] = useState("none");

  const setDisplay = (value) => {
    setHome("none");
    setDashboard("none");
    setAbout("none");
    setProfile("none");
    setLogin("none");
    setRegister("none");

    if (value === "home") {
      setHome("block");
    } else {
      setDashboard("block");
      (value === "about" || value === "dashboard") && setAbout("block");
      value === "profile" && setProfile("block");
      value === "login" && setLogin("block");
      value === "register" && setRegister("block");
    }
  };

  const dataManager = {
    setDisplay,
    home,
    dashboard,
    about,
    profile,
    login,
    register,
  };

  return (
    <>
      <div className="App home" style={{ display: home }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="my-4">
            <code>Welcome to My React JS Project</code>
          </p>
          <button
            type="button"
            className="link_button"
            onClick={() => {
              setDisplay("dashboard");
            }}
          >
            Click here to Continue
          </button>
        </header>
      </div>
      <div className="dashboard" style={{ display: dashboard }}>
        <Dashboard dataManager={dataManager} />
      </div>
    </>
  );
}

export default App;
