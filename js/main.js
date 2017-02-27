var firstName;
var birthDayObj;
var age;



function calZodiac() {

	var outputArea = document.getElementById('displayMsg');


	firstName = document.getElementById('fname').value;


	birthDayObj = new Date(document.getElementById('bday').value);

 	var bdayTime = birthDayObj.getTime();

 	var today = Date.now();

 	yourAge = (today - bdayTime) / 31556926000;

	var whichDayNdx = birthDayObj.getDay();

	

	//
	// this is what calculates the sign

	var monthNum = birthDayObj.getMonth();
	var dayNum = birthDayObj.getDate();

	monthNum ++;
	dayNum ++;



function getAge() {
	age= document.getElementById('birthDayObj').value - getTime();

}

	var astroSign;

	if ((monthNum == 12  && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)) {
		astroSign = 'Foggy. This means that you are shy, stubborn, and sometimes even a little gloomy. You appear calm in most situations, but your inner fog can come out when pushed to the limit.';
	} 
	//
	// Capricorn

	else if ((monthNum == 11 && dayNum >= 22) || (monthNum ==12 && dayNum <= 21 )) {
		astroSign = 'Sunny Day. This means that you are bright and can shine light on almost every situation. Your playfulness eases even the most tense situations. Watch out though, this may be mistaken for carelessness.';
	}
	//
	// Sagittarius

	else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <= 21 )){
		astroSign = 'Rainbow. This means that you know what you want and you will do anything to get it. You are fierce and brave, and live your life to experience things to the fullest and dive into every emotion you feel fully.';
	}
	//
	//Scorpio 

	else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23 )){
		astroSign = 'Breezy. This means you are kind and compassionate, but often you try to put others first and because of this, you get easily overwhelmed and stressed. Try to stay away from people that add more stress to your life, and embrace the ones who lift you up.';
	}
	//
	//Libra

	else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22 )){
		astroSign = 'Clear Skies. This means you are very reliable and intelligent. You like to make sure others are happy, and sometimes this can lead you to be hypercritical of yourself. Keep sight of your goals and with hard work it will all pay off.';
	}
	//
	//Virgo
	
	else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22 )){
		astroSign = 'Wildfire. This means that you are warm and love to be loved. You love being the center of attention, and but your big heart will always shine through. When socializing, your infectious energy can quickly alter the mood of those around you. ';
	}
	//
	//Leo

	else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <= 22 )){
		astroSign = 'Flash Flood. This means that are spontaneous, and sometimes even moody. This can lead to extreme expressions of emotion that leaves those around you feeling unsure. It is difficult for people to figure you out, and this can drive some people away.' ;
	}
	//
	// Cancer
	else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21 )){
		astroSign = 'Tornado. Tornados are caused by hot and cold air clashing, and a lot of the time this is what your emotions feel like. You can be restless and indecisive, but you can also be quick witted and fun to be around. You constantly have two sides of you battling inside, and the people in your life sometimes wonder who they will be meeting that day. ';
	}
	//
	//Gemini
	//Caused by unstable air 

	else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20 )){
		astroSign = 'Calm. You are strong and reliable, and people will often look to you for support. You are extremely dependable which makes making friends easy. You find that sometimes it is hard to find someone for you to depend on, but look to those around you and you could be suprised at how supportive they are.';
	}
	//
	//Taurus
	//reliable

	else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19 )){
		astroSign = 'Sand Storm. This means that you are daring, spontaneous and energetic. There is a constant flow of energy surrounding you, which makes it hard for others to stay upset around you. Do not let your ego get in your way though! You will be suprised at how much you can learn from being a little more patient with people.';
	}
	//
	//Aries
	//play dat funky music

	else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20 )){
	astroSign = 'Flurries. You are very connected to the arts and music, and can often use that to make connections with others. Your generosity and compassion for others also helps you maintain healthy relationships. Your wisdom and intuition will be able to lead you to the right path if you let them.';
	}
	//
	//Pisces

	else {
		astroSign = 'Misty. Your shyness can sometimes lead people to believe that you are uninterested, but when you let your true energetics side shine through people are more likely to approach you. Your personality allows you to adapt to almost any situation, and as long as you keep your mind occupied you can always trust you are on the path to success.';
	}
	//
	//Aquarius

	outputArea.innerHTML = 'Hello ' + firstName + '. You are ' + yourAge.toFixed(0) + ' years old. Your sign is ' + astroSign;
	return false;

}

function highlight() {
	console.log('fade2Content called');
	document.body.classList.remove("blackScreen");
}

var clearObj = document.getElementById('clear');
var calmObj = document.getElementById('calm');
var wildfireObj = document.getElementById('wild');
var flurryObj = document.getElementById('flurry');
var sandstormObj = document.getElementById('sand');
var floodObj = document.getElementById('flood');

var sunnyObj = document.getElementById('sunny');
var tornadoObj = document.getElementById('tornado');
var windyObj = document.getElementById('windy');
var foggyObj = document.getElementById('foggy');
var rainbowObj = document.getElementById('rainbow');
var hurricaneObj = document.getElementById('hurricane');



clearObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'clear');
}, false)

calmObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'calm');
}, false)

wildfireObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'wild');
}, false)


flurryObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'flurry');
}, false)

sandstormObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'sand');
}, false)

floodObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'flood');
}, false)

sunnyObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'sunny');
}, false)

tornadoObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'tornado');
}, false)

windyObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'windy');
}, false)

foggyObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'foggy');
}, false)

rainbowObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'rainbow');
}, false)

hurricaneObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'hurricane');
}, false)


function displayZodSign(evt, whichOne) {
	console.log('displayZodSign called ' + whichOne);


var row1 = document.getElementById('row1');
var imgArray = row1.children;
var row2 = document.getElementById('row2');
var imgArray2 = row2.children;

	console.log('imgArray is ' + imgArray)
	console.log('imgArray is ' + imgArray.length)
	console.log('imgArray 2 is ' + imgArray[2].tagName)

	//imgArray[0].classList.remove('display');
	//imgArray[3].classList.add('display');

	//Loop through array and remove display class from everything
	for (lp = 0; lp < imgArray.length; lp++) {
		imgArray[lp].classList.remove('active');
	}
	for (lp = 0; lp < imgArray2.length; lp++) {
		imgArray2[lp].classList.remove('active');
	}

	switch (whichOne){
		case 'clear':
			//display big image for clear
			//displayObj.src = 'img/ful_pisces.png';
			imgArray[0].classList.add('active');
			break;
		case 'calm':
			//displayObj.src ='img/ful_scorpio.png';
				imgArray[1].classList.add('active');
			break;
		case 'wild':
			//displayObj.src ='img/ful_aquarius.png';
			imgArray[2].classList.add('active');
			break;
		case 'flurry':
			//display big image for pis
			//displayObj.src = 'img/ful_pisces.png';
			imgArray[3].classList.add('active');
			break;
		case 'sand':
			//displayObj.src ='img/ful_scorpio.png';
				imgArray[4].classList.add('active');
			break;
		case 'flood':
			//displayObj.src ='img/ful_aquarius.png';
			imgArray[5].classList.add('active');
			break;

		case 'sunny':
			//display big image for clear
			//displayObj.src = 'img/ful_pisces.png';
			imgArray2[0].classList.add('active');
			break;
		case 'tornado':
			//displayObj.src ='img/ful_scorpio.png';
				imgArray2[1].classList.add('active');
			break;
		case 'windy':
			//displayObj.src ='img/ful_aquarius.png';
			imgArray2[2].classList.add('active');
			break;
		case 'foggy':
			//display big image for pis
			//displayObj.src = 'img/ful_pisces.png';
			imgArray2[3].classList.add('active');
			break;
		case 'rainbow':
			//displayObj.src ='img/ful_scorpio.png';
				imgArray2[4].classList.add('active');
			break;
		case 'hurr':
			//displayObj.src ='img/ful_aquarius.png';
			imgArray2[5].classList.add('active');
			break;	
		default:
			//displayObj.src = 'img/ful_blank.png';
			imgArray[0].classList.add('active');
	}
}

