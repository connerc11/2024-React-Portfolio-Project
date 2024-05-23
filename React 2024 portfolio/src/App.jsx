// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
import styles from "./App.module.css";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from "./components/Hero/Hero";
//import './vars.css'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
       <About />
       <Experience />
      < Projects /> 
      {/* <Contact />    */}
    </div>
  );
}

export default App