import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
// import Preloader from './components/preloader

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState("none");
  const [display, setDisplay] = useState("none");

  window.onload = function(){
    setDisplay("block");
  }

 const toggleDisplay = () => {
  setAlert({display : "none"});
 }

  const toggleTheme = () => {
    if(theme === "light"){
      setTheme("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#00001a";
      setAlert("block");
      setInterval(() => {
        toggleDisplay();
      }, 2000);
    }
    else{
      setTheme("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setAlert("block")
      setInterval(() => {
        toggleDisplay();
      }, 2000);
    }
  }

  return (
    <>
    <Navbar display={display} title="URANUS" theme={theme} toggleTheme={toggleTheme}/>
    {/* <Preloader display={display}/> */}
    <Header display={display} alert={alert} theme={theme}/>
    <Content display={display}/>
    <FAQ display={display} theme={theme}/>
    <Footer display={display} theme={theme}/>
    </>
  );
  }

export default App;
