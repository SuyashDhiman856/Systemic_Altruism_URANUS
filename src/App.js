import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if(theme === "light"){
      setTheme("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#00001a";
    }
    else{
      setTheme("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="$URANUS" theme={theme} toggleTheme={toggleTheme}/>
    <Header/>
    <Content/>
    <FAQ theme={theme}/>
    <Footer theme={theme}/>
    </>
  );
}

export default App;
