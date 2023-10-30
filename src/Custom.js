import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

const questions = [
    "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    "Our leadership team knows of the potential risks and rewards of leveraging AI.",
    "Our leadership team understands the value of tapping experts to educate our staff about AI.",
    "Our church should have an AI policy that guides staff on tools, training, attribution, ethical boundaries, etc."
];
const choices = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

const ProgressIndicator = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);


    const [value, setValue] = useState(0); 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        if (value !== null && value !== 0) {
            const timeout = setTimeout(() => {
                handleNextQuestion();
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [value]);

 

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setValue(null);
        } else {
        }
    };

    return (


        <div>
            <div className="question-progress-bar" style={{ padding: "28px" }}>
                <Slider
                    value={((currentQuestion + 1) / questions.length) * 100}
                    min={0}
                    max={100}
                    step={1}
                    valueLabelDisplay="on"
                    aria-labelledby="continuous-slider"
                />

                <div className='stratagy' style={{ display: 'flex', justifyContent: 'center', }}>
                    <div style={{ color:"#6e0cf9" }}>
                        STRATAGY
                        </div>
                </div>
            </div>
        <div className="progress-container steps">
            

            

            <div class="indicator"><strong>{currentQuestion+1}</strong>/{questions.length}</div>
            <div className="question-container">
                    <p className='questiontitle'>{questions[currentQuestion]}</p>

            <Slider
                value={value}
                    onChange={handleChange}
                  
                
                min={0}
                max={4}
               step={1}
                 marks
                aria-labelledby="slider"
                className="custom-slider"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                {choices.map((choice, index) => (
                    <div key={index} style={{ fontWeight: value === index ? 'bold' : 'normal' }}>
                        {choice}
                    </div>
                ))}
            </div>
           
        </div>
        </div>
        </div>
    );
};

export default ProgressIndicator;
