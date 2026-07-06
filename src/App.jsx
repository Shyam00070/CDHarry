import React from "react";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
//import AboutUs from "./components/AboutUs.jsx";
import { Alert } from "./components/Alert.jsx";
import { useState , useEffect } from "react";
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/

function App()
{
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Analyzer - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert("Light mode has been enabled", "danger");
      document.title = "Text Analyzer - Light Mode";
    }
  };
  const [alert , setAlert] = useState(null);
  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  useEffect(() => {
  document.body.style.backgroundColor =
    mode === "dark" ? "#212529" : "white";
  document.body.style.color =
    mode === "dark" ? "white" : "#212529";
}, [mode]);
  return(
     <>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
     <div className="container">
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
       {/*<Routes>
          <Route  path="/Home" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          <Route  path="/about" element={<AboutUs mode={mode} />} />       
       </Routes>*/}
      </div>
    </>
  );
}

export default App;