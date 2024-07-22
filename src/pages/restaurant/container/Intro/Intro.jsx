import React, { useRef, useState } from "react";
/* import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"; */
import "./Intro.css";
import { meal } from "../../constants";

const Pause = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="app_video-overlay_circle_icon"
    >
        <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
    </svg>
);

const Play = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="app_video-overlay_circle_icon"
    >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
);

const Intro = () => {
    const [play, setPlay] = useState(false);
    const ref = useRef();
    const handleVideo = () => {
        setPlay((prev) => !prev);
        if (play) {
            ref.current.pause();
        } else {
            ref.current.play();
        }
    };
    return (
        <section className="app__video">
            <video
                src={meal}
                type="video/mp4"
                loop
                controls={false}
                muted
                ref={ref}
            />
            <div className={`app__video-overlay flex__center ${play && "active"}`}>
                <div className={`app__video-overlay_wrapper flex__center ${play && "active"}`}>
                    <button
                        className="app__video-overlay_circle flex__center"
                        onClick={handleVideo}
                    >
                        {play ? <Pause /> : <Play />}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Intro;
