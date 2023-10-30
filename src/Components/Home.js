import React from 'react'
import './home.css';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';


const Home = () => {
const navigates = useNavigate();

    function fncClick() {
    

navigates('/assesment')

}

  return (
    <div className='home'>
      
        
          
          <main className="main">
              <div className="container start">
                  
          
                  
                  <VideoPlayer />



                  <div className="intro">
                      <h1 style={{ marginBottom: '0px' }}>
                          <span style={{ color: 'rgb(110, 12, 249)' }}>Is your church embracing impact</span> or AI* hesitant?</h1>
                      <ol type="1" className="intro-points-list">
                          <li>Take this 3-minute assessment</li>
                          <li>Invite your team to take it too after you do</li>
                          <li>View everyone's results on 1 dashboard</li>
                          <li>Align on the best next step for your church's approach to AI</li>
                      </ol>
                      <div className="completion">
                          <button className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root cta css-1ujsas3" tabindex="0" type="button" onClick={fncClick} >GET STARTED<span class="MuiTouchRipple-root css-w0pj6f"></span>
                          </button>
                          <div className="time-estimate">
                              <div className="img-container">
                                  <img className="clock-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB7VXdbYMwED5A/Ei8sEHpBGWDjpB0AzZoNkg7QbNBOwJMEGUDNiidgD4ikKB36V1lVTbGvLafdLFjf77PZ3xngH84wLPMZ2EYlp7n3WO/QMt5vEFr53mux3F8g60g52hdFEWzxd6JC67ARS/iBPtntEOSJLkyX5BjElDEjqsFiMzOuziODzY+cSRi2pyND7y7qwDtFlaCI5Oj3S+SJXxTBHJ8ujlawyId/s1gKQoSAvMmjCLs48ycUh33pYPXdEctXstn2I6afe21IvCdB4QGNiIIgoq7d1qCXMUFH9bjMvnxwRF4FIVr8qkiLf1g0t0Yyb5/i02NQq+6TJdrj9+1MYk0THgwifR93w7DULLYRSN2FcHxD60IOr9QO03TDizQiOXs/Mi+KtPaTLJ2TTn5DVz7aMszIUpCOpUVRKHUr9LKRtJJhNZERBEodesJ1kIR+nkv1Mio7FP5lzLCEZzAFZr3QmscxWLltT2/wM8v3Tj1+W3RGnp+0zStPhHwJ/AFUmOfRi0p4R0AAAAASUVORK5CYII=" alt="estimated time"/>
                      
                  </div>
                      <span>3 min</span></div></div><p className="footnote">*Artificial Intelligence</p></div>
                  

              </div>
              



          </main>
       

    </div>
  )
}




export default Home
