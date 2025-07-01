var firebaseConfig = {
  apiKey: "AIzaSyDNuYoGq89K73czEFfim3zbnmKPOE3ZuyI",
  authDomain: "darkweb-tif.firebaseapp.com",
  projectId: "darkweb-tif",
  storageBucket: "darkweb-tif.firebasestorage.app",
  messagingSenderId: "770150697240",
  appId: "1:770150697240:web:e94de8d60a1c7d23c7f66d",
  measurementId: "G-82M9SZFDM7"
}; firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); 
const db = firebase.firestore();

emailShow();

const jinaHolder = document.getElementById('jinaHolder');
const jinaHolder2 = document.getElementById('jinaHolder2');

var thePerson =  `Anonymous <hr id="hr-t">`;

var nesh = localStorage.getItem('banklogs');

auth.onAuthStateChanged(user => {
	if(!user) { 
		var userTh = window.location.href;
		if(userTh.includes('#')) {
			userLogged();
		} else {
			window.location.assign('index');
		}
	} else {
		var theGuy = user.uid;
	
		if(user.email) {
			var theaddress = user.displayName;
			jinaHolder.value = theaddress;
			theGuy = user.email;
			thePerson = `${theaddress}. <hr id="hr-t">`;
		} 

		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => { 
			if(doc.exists) { 
				return docRef.update({ homePage: true });
			} 
		});

		items = JSON.parse(nesh);
		for (var i = 0; i < (JSON.parse(nesh)).length; i++) {
			var userz = `table-id${items.indexOf(items[i])}`;
			document.getElementById(`${userz}`).innerHTML = `${thePerson}`; 
		}
	} 
});





function emailShow() {
	auth.onAuthStateChanged(user => { 
		$("html, body").animate({ scrollTop: 0 }, 500);

		if(nesh && (JSON.parse(nesh).length) > 0) {
			let items3 = (JSON.parse(nesh)); var total = 0;
			items3.map(data=>{ 
				var price4 = data.price.replace('Price: ','').replace(',','').replace('$',''); 
				total = total + (price4 * 1); 
			}); total = '$' + total;
		} 
	});
}



function userLogged() {
	var userTh = window.location.href;
	var userThi = userTh.split('?')[0];
	if(userTh.includes('?')) {
		setTimeout(() => {
			window.location.href = userThi;
		}, 3000);
	}
	var userThis = userThi.substring(userThi.indexOf("#") + 1);

	var docRef = db.collection("users").doc(userThis);
	docRef.get().then((doc) => { 
		if(doc.exists) { 
			var datas = doc.data().yourID;
			localStorage.setItem('banklogs', JSON.stringify(datas));
			localStorage.setItem('yourName', doc.data().userCred[0]);
			jinaHolder.value = doc.data().userCred[0];
		}
	});

	var sentRef = db.collection("users").doc(userThis);
	sentRef.get().then((doc) => {
		if(doc.exists) { 
			return sentRef.update({ emailSent: true }); 
		}
	});

	items = JSON.parse(nesh);
	for (var i = 0; i < (JSON.parse(nesh)).length; i++) {
		var userz = `table-id${items.indexOf(items[i])}`;
		document.getElementById(`${userz}`).innerHTML = `
			${localStorage.getItem('yourName')}
			<hr id="hr-t"> `; 
	}

	if(window.localStorage ) {
		if(!localStorage.getItem('fit-Reload')) {
			localStorage.setItem('fit-Reload', true);
			setTimeout(() => {
				window.location.reload();
			}, 3000);
		} else {
			localStorage.removeItem('fit-Reload');
			emailShow();
		}
	}
}




document.getElementById('photo2').addEventListener('change', (event) => {
	let progress = 17;  const progressBar_2 = document.getElementById("upload-pic");
	setTimeout(() => {
		progressBar_2.style.width = progress + '%'; 
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, 1000);
	setTimeout(() => {
		let progress = 35; progressBar_2.style.width = progress + '%'; 
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, 2000);
	setTimeout(() => {
		let progress = 51; progressBar_2.style.width = progress + '%'; 
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, 3000);
	setTimeout(() => {
		let progress = 68; progressBar_2.style.width = progress + '%'; 
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, 4000);
	setTimeout(() => {
		let progress = 85; progressBar_2.style.width = progress + '%'; 
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, 5000);
	setTimeout(() => {
		let progress = 100; progressBar_2.style.width = progress + '%'; 
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
		var shortCutFunction = 'success'; var msg = ` 
			Screenshot uploaded... <br> <hr class="to-hr hr15-top"> 
			Send an email to admin, <br> email@darkweb.fit .. <hr class="to-hr hr15-top"> `;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
	}, 6000);

	setTimeout(() => { $('#uploadModal').modal('hide'); }, 7000);
});










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
