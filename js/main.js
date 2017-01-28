var firstName;
var lastName;
var birthDayObj;

function callZodiac () {

	var outputArea = document.getElementById ('displayMsg');


	firstName = document.getElementById('fName').value;

	lastName = document.getElementById('lName').value;

	birthDayObj = new Date(document.getElementById('bday').value);


	var whichDayIndex = birthDayObj.getDay();

	//
	// this is what calculates the sign

	var monthNum = birthDayObj.getMonth();
	var dayNum = birthDayObj.getDate();

	monthNum ++;
	dayNum ++;

	var astroSign;

	if ((monthNum == 12  && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)) {
		astroSign = 'Capricorn';
	} 
	//
	// Capricorn

	else if ((monthNum == 11 && dayNum >= 22) || (monthNum ==12 && dayNum <= 21 )) {
		astroSign = 'Sagittarius';
	}
	//
	// Sagittarius

	else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <= 21 )){
		astroSign = 'Scorpio';
	}
	//
	//Scorpio

	else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23 )){
		astroSign = 'Libra';
	}
	//
	//Libra

	else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22 )){
		astroSign = 'Virgo';
	}
	//
	//Virgo
	else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22 )){
		astroSign = 'Leo';
	}
	//
	//Leo

	else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <= 22 )){
		astroSign = 'Cancer';
	}
	//
	// Cancer
	else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21 )){
		astroSign = 'Gemini';
	}
	//
	//Gemini

	else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20 )){
		astroSign = 'Taurus';
	}
	//
	//Taurus

	else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19 )){
		astroSign = 'Aries';
	}
	//
	//Aries

	else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20 )){
	astroSign = 'Pisces';
	}
	//
	//Pisces

	else {
		astroSign = 'Aquarius';
	}
	//
	//Aquarius

	outputArea.innerHTML = 'Hello ' + firstName + lastName '. Your sign is ' astroSign + '. and you are ' +  + ' years old.';

}