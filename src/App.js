// App.js
import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionSlider from './QuestionSlider'
import './Components/home.css';



const App = () => {
  return (
    <div className='app'>  
      
      {/* header */}
      
      <header>


        <div className="headerwrapper">
          <div className="logo-left" >


          </div>


          <div className="assessment-title desktop">
            <p className="logo-text">AI Pulse Check</p></div>
          <div className="logo-right">


            <img src="./right.png" />

          </div>

        </div>
      </header> 
     <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/assesment" element={<QuestionSlider/>} />
      </Routes>
      </Router>
      
      {/* footer */}
     
      <footer style={{ minHeight: "70px" }}>
        <div className="bleat-logo-mobile">
          <img src="data:image/png;base64,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" alt="bleat logo" height="43px" width="auto" />
        </div>
      </footer>
    </div>
  );

};

export default App;
