var firstName;
var birthDayObj;
var age;
var outputArea = document.getElementById('displayMsg');
var astroSign;

function calZodiac() {

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
	

	if ((monthNum == 12  && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)) {
		astroSign = '<h2>December 22- January 20 </h2> <p>Stormy</p> This means that you are shy, stubborn, and sometimes even a little gloomy. You appear calm in most situations, but your inner thunder and lightning can come out when pushed to the limit.';
		displayZodSign('click', 'storm');
	} 
	//
	// Capricorn

	else if ((monthNum == 11 && dayNum >= 22) || (monthNum ==12 && dayNum <= 21 )) {
		astroSign = '<h2>November 22 - December 21</h2> <h3>Sunny Day</h3> <p>This means that you are bright and can shine light on almost every situation. Your playfulness eases even the most tense situations. Watch out though, this may be mistaken for carelessness.</p>';
		displayZodSign('click', 'sunny');
	}
	//
	// Sagittarius

	else if ((monthNum == 10 && dayNum >= 23) || (monthNum == 11 && dayNum <= 21 )){
		astroSign = '<h2>October 23 - November 21</h2> <h3>Rainbow</h3> This means that you know what you want and you will do anything to get it. You are fierce and brave, and live your life to experience things to the fullest and dive into every emotion you feel fully.';
		displayZodSign('click', 'rainbow');
	}
	//
	//Scorpio 

	else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23 )){
		astroSign = '<h2>September 23 - October 22</h2> <h3>Windy</h3> This means you are kind and compassionate, but often you try to put others first and because of this, you get easily overwhelmed and stressed. Try to stay away from people that add more stress to your life, and embrace the ones who lift you up.';
		displayZodSign('click', 'windy');
	}
	//
	//Libra

	else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22 )){
		astroSign = '<h2>August 23 - Stepember 22</h2> <h3>Clear Skies</h3> This means you are very reliable and intelligent. You like to make sure others are happy, and sometimes this can lead you to be hypercritical of yourself. Keep sight of your goals and with hard work it will all pay off.';
		displayZodSign('click', 'clear');
	}
	//
	//Virgo
	
	else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22 )){
		astroSign = '<h2>July 23 - August 22</h2> <h3>Wildfire</h3> This means that you are warm and love to be loved. You love being the center of attention, and but your big heart will always shine through. When socializing, your infectious energy can quickly alter the mood of those around you. ';
		displayZodSign('click', 'wild');
	}
	//
	//Leo

	else if ((monthNum == 6 && dayNum >= 21) || (monthNum == 7 && dayNum <= 22 )){
		astroSign = '<h2>June 21 - July 22</h2> <h3>Flash Flood</h3> This means that are spontaneous, and sometimes even moody. This can lead to extreme expressions of emotion that leaves those around you feeling unsure. It is difficult for people to figure you out, and this can drive some people away.' ;
		displayZodSign('click', 'flood');
	}
	//
	// Cancer
	else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21 )){
		astroSign = '<h2>May 21 - June 20</h2> <h3>Tornado</h3> Tornados are caused by hot and cold air clashing, and this is what your emotions often feel like. You can be restless and indecisive, but also be quick witted and fun to be around. People in your life sometimes wonder who they will be meeting that day. ';
		displayZodSign('click', 'tornado');
	}
	//
	//Gemini
	//Caused by unstable air 

	else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20 )){
		astroSign = '<h2>April 20 - May 20</h2> <h3>Calm</h3> You are strong and reliable, and people will often look to you for support. You find that sometimes it is hard to find someone for you to depend on, but look to those around you and you could be suprised at how supportive they are.';
		displayZodSign('click', 'calm');
	}
	//
	//Taurus
	//reliable

	else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19 )){
		astroSign = '<h2>March 21 - April 19</h2> <h3>Sand Storm</h3> You are daring, spontaneous and energetic. There is a constant flow of energy surrounding you, which makes it hard for others to stay upset around you. You will be suprised at how much you can learn from being a little more patient with people.';
		displayZodSign('click', 'sand');
	}
	//
	//Aries
	//play dat funky music

	else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20 )){
		astroSign = '<h2>February 19 - March 20</h2> <h3>Flurries</h3> You are very connected to the arts and music, and can use that to make connections with others. Your generosity and compassion for others also helps you maintain healthy relationships. Your intuition will lead you to the right path';
		displayZodSign('click', 'flurry');
	}
	//
	//Pisces

	else {
			astroSign = '<h2>January 20 - February 18</h2> <h3>Hurricane</h3> Your emotions can leave people spinning sometimes, but when you let your true energetic side shine through people are more likely to catch your good vibes. As long as you keep your mind occupied you can always trust you are on the path to success.';	
					displayZodSign('click', 'hurricane');
			}
	//
	//Aquarius

	outputArea.innerHTML = astroSign;
	return false;

}

function highlight() {
	console.log('fade2Content called');
	document.body.classList.remove('blackScreen');
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
var stormObj = document.getElementById('storm');
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

stormObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'storm');
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
			imgArray[0].classList.add('active');
			outputArea.innerHTML = '<h2>August 23 - Stepember 22</h2> <h3>Clear Skies</h3> This means you are very reliable and intelligent. You like to make sure others are happy, and sometimes this can lead you to be hypercritical of yourself. Keep sight of your goals and with hard work it will all pay off.';
			 playAudio('birds');

			break;
		case 'calm':
				imgArray[1].classList.add('active');
				outputArea.innerHTML = '<h2>April 20 - May 20</h2> <h3>Calm</h3> You are strong and reliable, and people will often look to you for support. You find that sometimes it is hard to find someone for you to depend on, but look to those around you and you could be suprised at how supportive they are.';
				playAudio('clm');
			break;
		case 'wild':
			imgArray[2].classList.add('active');
			outputArea.innerHTML = '<h2>July 23 - August 22</h2> <h3>Wildfire</h3> This means that you are warm and love to be loved. You love being the center of attention, and but your big heart will always shine through. When socializing, your infectious energy can quickly alter the mood of those around you. ';
			playAudio('fire');
			break;

		case 'flurry':
			imgArray[3].classList.add('active');
			outputArea.innerHTML = '<h2>February 19 - March 20</h2> <h3>Flurries</h3> You are very connected to the arts and music, and can use that to make connections with others. Your generosity and compassion for others also helps you maintain healthy relationships. Your intuition will lead you to the right path';
			playAudio('flurries');
			break;
		case 'sand':
				imgArray[4].classList.add('active');
				outputArea.innerHTML = '<h2>March 21 - April 19</h2> <h3>Sand Storm</h3> You are daring, spontaneous and energetic. There is a constant flow of energy surrounding you, which makes it hard for others to stay upset around you. You will be suprised at how much you can learn from being a little more patient with people.';
				playAudio('sands');
			break;
		case 'flood':
			imgArray[5].classList.add('active');
			outputArea.innerHTML = '<h2>June 21 - July22</h2> <h3>Flash Flood</h3> This means that are spontaneous, and sometimes even moody. This can lead to extreme expressions of emotion that leaves those around you feeling unsure. It is difficult for people to figure you out, and this can drive some people away.' ;
			playAudio('floods');
			break;

		case 'sunny':

			imgArray2[0].classList.add('active');
			outputArea.innerHTML = '<h2>November 22 - December 21</h2> <h3>Sunny Day</h3> <p>This means that you are bright and can shine light on almost every situation. Your playfulness eases even the most tense situations. Watch out though, this may be mistaken for carelessness.</p>';
			playAudio('chimes');
			break;
		case 'tornado':
				imgArray2[1].classList.add('active');
				outputArea.innerHTML = '<h2>May 21 - June 20</h2> <h3>Tornado</h3> Tornados are caused by hot and cold air clashing, and this is what your emotions often feel like. You can be restless and indecisive, but also be quick witted and fun to be around. People in your life sometimes wonder who they will be meeting that day. ';
				playAudio('wind');
			break;
		case 'windy':
			imgArray2[2].classList.add('active');
			outputArea.innerHTML = '<h2>September 23 - October 22</h2> <h3>Windy</h3> This means you are kind and compassionate, but often you try to put others first and because of this, you get easily overwhelmed and stressed. Try to stay away from people that add more stress to your life, and embrace the ones who lift you up.';
			playAudio('torn');
			break;
		case 'storm':
			imgArray2[3].classList.add('active');
			outputArea.innerHTML = '<h2>December 22 - January 20 </h2> <h3>Storm</h3> <p>This means that you are shy, stubborn, and sometimes even a little gloomy. You appear calm in most situations, but your inner fog can come out when pushed to the limit.</p>';
			playAudio('thunder');
			break;
		case 'rainbow':
				imgArray2[4].classList.add('active');
			outputArea.innerHTML = '<h2>October 23 - November 21</h2> <h3>Rainbow</h3> This means that you know what you want and you will do anything to get it. You are fierce and brave, and live your life to experience things to the fullest and dive into every emotion you feel fully.';
			playAudio('somewhere');
			break;
		case 'hurricane':
			imgArray2[5].classList.add('active');
			outputArea.innerHTML = '<h2>January 20 - February 18</h2> <h3>Hurricane</h3> Your emotions can leave people spinning sometimes, but when you let your true energetic side shine through people are more likely to catch your good vibes. As long as you keep your mind occupied you can always trust you are on the path to success.';
			playAudio('hurr');
			break;	
	}
}

function playAudio(whichSound) {
  //play sound based on whichSound parameter 
  document.getElementById(whichSound).play();
}

var helpbuttonObj = document.getElementById('helpbutton');
var helpscreenObj = document.getElementById('help-screen')

helpbuttonObj.addEventListener('click', function(evt) {
	helpClick(evt, 'helpbutton');
}, false);

helpscreenObj.addEventListener('click', function(evt) {
	closeHelp(evt, 'help-screen');
}, false);

function helpClick(evt) {
	helpscreenObj.classList.add('help-screen-active');
	console.log('it works');
}

function closeHelp(evt) {
	helpscreenObj.classList.remove('help-screen-active');
}









