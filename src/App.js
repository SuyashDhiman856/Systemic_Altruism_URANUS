import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState({display : "none"});

 const toggleDisplay = () => {
  setAlert({display : "none"});
  // document.getElementById("alert").style.animationName = "display";
  // document.getElementById("alert").style.animationDuration = "1s";
 }

  const toggleTheme = () => {
    if(theme === "light"){
      setTheme("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#00001a";
      setAlert({display : "block"})
      // document.getElementById("alert").style.display = alert.display;
      // console.log(document.getElementById("alert").style.display);
      setInterval(() => {
        toggleDisplay();
      }, 2000);
    }
    else{
      setTheme("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setAlert({display : "block"})
      // document.getElementById("alert").style.display = alert.display;
      // console.log(document.getElementById("alert").style.display);
      setInterval(() => {
        toggleDisplay();
      }, 2000);
    }
  }

  return (
    <>
    <Navbar title="URANUS" theme={theme} toggleTheme={toggleTheme}/>
    <Header alert={alert} theme={theme}/>
    <Content/>
    <FAQ theme={theme}/>
    <Footer theme={theme}/>
    </>
  );
  }

export default App;
