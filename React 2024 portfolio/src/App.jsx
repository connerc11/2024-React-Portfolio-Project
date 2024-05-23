// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
import styles from "./App.module.css";
import { Navbar } from './components/Navbar/Navbar'
//import './vars.css'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
       <Hero />
      { /* <About />
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App