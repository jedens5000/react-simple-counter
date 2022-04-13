import React, {useState, useEffect} from "react";
import "../styles/index.css";

function Home() {
	// time is the variable, setTime is the function, 00 is the starting point
	const [time, setTime] = React.useState(00);
	const [timerOn, setTimeOn] = React.useState(false);

	React.useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

	return (
		<div className="Home">
			{/* <span>{("00" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
			<span>:{("00" + Math.floor((time / 1000) % 60)).slice(-2)}</span> */}
			<div>{time}</div>
			<div>
				<button onClick={() => setTimeOn(true)}>Start</button>
				<button onClick={() => setTimeOn(false)}>Stop</button>
				<button onClick={() => setTime(0)}>Reset</button>
			</div>
		</div>
	);
}

export default Home;
