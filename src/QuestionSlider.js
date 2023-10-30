import React, { useState } from 'react';



import ProgressIndicator from './Custom'



const QuestionSlider = () => {

  return (
    <div style={{background:"black"}}>
      <main className="main">
        <div className="container assessment" style={{margin:"30px auto"}}>
          
          <ProgressIndicator/>


     
      </div>
      </main>
    </div>
  );
};

export default QuestionSlider;
