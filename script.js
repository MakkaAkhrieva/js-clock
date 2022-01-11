const secondHand = document.querySelector('.second-hand'),
			minsHand = document.querySelector('.min-hand'),
			hourHand = document.querySelector('.hour-hand');

const setDate = () => {
	const now = new Date(),
				seconds = now.getSeconds(),
				mins = now.getMinutes(),
				hour = now.getHours(),
				secondDegree = (seconds / 60) * 360,
				minsDegeree = (mins / 60) * 360,
				hourDegree = (hour / 12) * 360;
	secondHand.style.transform = `rotate(${secondDegree}deg)`;
	minsHand.style.transform = `rotate(${minsDegeree}deg)`;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;			
}	
setInterval(setDate, 1000)			