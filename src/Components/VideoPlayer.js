import React, { useRef, useState, useEffect } from 'react';
import '.././Components/home.css';

const VideoPlayer = () => {

    
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [isPlayButtonVisible, setIsPlayButtonVisible] = useState(true);


    const fncPlay = () => {

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);



        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
        setIsPlayButtonVisible(false);


    };
    const handlePlayPauseClick = () => {


        setIsPlayButtonVisible(true);
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);



        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

  const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleDurationChange = () => {
        setDuration(videoRef.current.duration);
    };

    const handleSliderChange = (e) => {
        const newTime = parseFloat(e.target.value);
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);

        if (newTime >= 30) {
            setIsPlayButtonVisible(true);
            setCurrentTime(newTime);

        } else {
            setIsPlayButtonVisible(false);
        }
    };

    useEffect(() => {
        // Update duration when video metadata is loaded
        videoRef?.current?.addEventListener('loadedmetadata', handleDurationChange);

        // Cleanup event listener on unmount
        return () => {
            videoRef?.current?.removeEventListener('loadedmetadata', handleDurationChange);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
       
        <div className="custom-video-player video">
            <video ref={videoRef} onTimeUpdate={handleTimeUpdate} >
                <source src="https://40parables-assets.s3.amazonaws.com/bleat-AI-PulseCheck-Intro.mp4" type="video/mp4" />
            </video>

            {isPlayButtonVisible ?
 <img alt="play button"
                        onClick={fncPlay}
                        className="playbtn"
src="./play.png" />
                    :
                    <div className="custom-controls" id="slider">
                        <button onClick={handlePlayPauseClick}>
                            {isPlaying && (
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PauseIcon">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
                                </svg>
                            )}
                        </button>
                        <input
                            className="custom-slider"
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={handleSliderChange}
                        />
                        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                    </div>
            }

           
        </div>


    );
};

export default VideoPlayer;
