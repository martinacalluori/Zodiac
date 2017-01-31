var firstName;
var lastName;
var birthDayObj;
var age;


function calZodiac() {

	var outputArea = document.getElementById('displayMsg');


	firstName = document.getElementById('fname').value;

	lastName = document.getElementById('lname').value;


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
		astroSign = 'Typhoon. This means that you know what you want and you will do anything to get it. You are fierce and brave, and live your life to experience things to the fullest and dive into every emotion you feel fully.';
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
	//Aquarius*/

	outputArea.innerHTML = 'Hello ' + firstName + ' ' + lastName + '. You are ' + yourAge.toFixed(0) + ' years old. Your sign is ' + astroSign;
	return false;

}