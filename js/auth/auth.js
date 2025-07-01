var firebaseConfig = {
  apiKey: "AIzaSyDNuYoGq89K73czEFfim3zbnmKPOE3ZuyI",
  authDomain: "darkweb-tif.firebaseapp.com",
  projectId: "darkweb-tif",
  storageBucket: "darkweb-tif.firebasestorage.app",
  messagingSenderId: "770150697240",
  appId: "1:770150697240:web:e94de8d60a1c7d23c7f66d",
  measurementId: "G-82M9SZFDM7"
}; firebase.initializeApp(firebaseConfig);

fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	localStorage.setItem('cationZ', data.country_name +  ', ' + data.city); 
});

const auth = firebase.auth(); 
const db = firebase.firestore();

var banks = window.location.href;
var theUrls = banks;
if(banks.includes('www')) {
	banks = banks.replace('https://www.', '');
	theUrls = banks.replace('darkweb.fit/', '');
} else if(banks.includes('http://')) {
	banks = banks.replace('http://127.0.0.1:5501/', '');
	theUrls = banks.replace('public/', '');
}

emailShow();

var cationZ = ', '; 
const jinaHolder = document.getElementById('jinaHolder');
const jinaHolder2 = document.getElementById('jinaHolder2');

var nesh = localStorage.getItem('banklogs');


const mailField = document.getElementById('inputLife');
const signUp = document.getElementById('email-phone');

const theLifes = document.getElementById('the-life');
const theForm = document.getElementById('the-form');

const nextUp = document.getElementById('next-up');
const wildPs = document.getElementById('wild');

const invoDivs = document.getElementById('invoice-div');


if(localStorage.getItem('cationZ')) {
	cationZ = localStorage.getItem('cationZ');
} 

auth.onAuthStateChanged(user => {
	if(!user) { 
		window.location.assign('index');
	} else {
		var theGuy = user.uid;
		var userCred = 'Anonymous';

		if(user.email) {
			theGuy = user.email;
			jinaHolder.value = user.displayName;
			userCred = [user.displayName];
			emailPresent();
		} 

		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => { 
			if(doc.exists) {
				var bankers = doc.data().banks;
				if(!bankers.includes(banks)) {
					bankers.push(banks);
					return docRef.update({ 
						location: cationZ, banks: bankers 
					});
				}
			} else {
				return docRef.set({ 
					location: cationZ, banks: [banks] 
				});
			}
		});
	}
});



let theValue = mailField.value; let ex = false; 
mailField.addEventListener('input', runOnce);

function runOnce() {
	if (!ex) {
		if(mailField.value.includes('@')) { 
			if(!mailField.value.includes('@gmail.com') && !mailField.value.includes('@yahoo.com')) {
				setTimeout(() => {
					ex = true; theValue = mailField.value; 
					mailField.value = theValue + 'gmail.com'; 
				}, 1000);
			}
		} 
	}

  	if(mailField.value == '') { 
		mailField.style.textAlign = 'center'; 

		wildPs.classList.remove('sm-display-none');
		nextUp.classList.add('sm-display-none');
	} else {
		wildPs.classList.add('sm-display-none');
		nextUp.classList.remove('sm-display-none');
	}
}

const signUpFunction = (event) => {
	event.preventDefault(); 
	const email = mailField.value;

	if(email.includes('@')) {
		if(email.includes('@yahoo.com') || email.includes('@YAHOO.COM')) {
			signInWithYahoo();
		} else {
			signInWithGoogle();
		}
	} else {
		mailField.style.textAlign = 'right';
		mailField.value = theValue + '@gmail.com'; 
		mailField.focus();
		mailField.setSelectionRange(0, 0);
	}
}
signUp.addEventListener('click', signUpFunction); 
theForm.addEventListener('submit', signUpFunction);


const signInWithYahoo = () => {
	const theProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(theProvider).then(() => {
		window.location.assign(`${theUrls}`);
	}).catch(error => {
		var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
		toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
		var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
	});
};

const signInWithGoogle = () => {
	const theProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(theProvider).then(() => {
		window.location.assign(`${theUrls}`);
	}).catch(error => {
		var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
		toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
		var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
	});
};




if(window.innerWidth < 700) {
	wildPs.innerHTML = `
		Login with <span id="in-span">Email</span>
	`;
	var tHead1 = document.getElementsByClassName('t-head')[0].innerHTML;
	var tHead2 = document.getElementsByClassName('t-head')[1].innerHTML;

	document.getElementsByClassName('t-head')[0].innerHTML = `${tHead1.replace('Accounts', '')}`;
	document.getElementsByClassName('t-head')[1].innerHTML = `${tHead2.replace('Accounts', '')}`;
}


function emailShow() {
	auth.onAuthStateChanged(user => { 
		$("html, body").animate({ scrollTop: 0 }, 500);
		
		var data1 = 200; 
		if(window.innerWidth < 400) {
			data1 = data1*1.2;
		}

		var interval = setInterval(function() {
			if(document.readyState === 'complete') {
				clearInterval(interval);
				setTimeout(() => {
					$("html, body").animate({ scrollTop: data1 },  1200);
				}, 1200);
			}    
		}, 100);
	});
}



function emailPresent() {
	auth.onAuthStateChanged(user => { 
		mailField.value = user.email;
		mailField.setAttribute('readOnly', true);

		wildPs.innerHTML = `
			You're logged in <br>
			<span id="in-span">successfully</span>.
		`;

		nextUp.classList.add('display-none');
	});
}









document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) {
			event.preventDefault();
		}   
	});
}


var canvas = document.getElementById("canvas"); var ctx = canvas.getContext("2d"); var radius = canvas.height / 2;
ctx.translate(radius, radius); radius = radius * 1;  setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius); 	drawNumbers(ctx, radius);	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;	ctx.beginPath();	ctx.arc(0, 0, radius, 0, 2 * Math.PI);	ctx.fillStyle = 'white';	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);	
	grad.addColorStop(0, '#121d33');	grad.addColorStop(0.5, 'rgba(0,0,0,0)');	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;	ctx.lineWidth = radius * 0;	ctx.stroke();	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);	ctx.fillStyle = '#121d33';	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;	var num;	ctx.font = radius * 0.33 + "px arial";	ctx.textBaseline = "middle";	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;	ctx.rotate(ang);	ctx.translate(0, -radius * 0.87);	ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);	ctx.rotate(ang);	ctx.translate(0, radius * 0.87);	ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	hour = hour % 12;
	hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) +	(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}


var logoDiv = document.getElementById('logo');

logoDiv.addEventListener('click', () => {
	setTimeout(() => {
		window.location.assign('home');
	}, 1000);
});
