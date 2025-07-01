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

if(!localStorage.getItem('banklogs')) {
	localStorage.setItem('banklogs',[]);
} 

emailShow();

const jinaHolder = document.getElementById('jinaHolder');
const jinaHolder2 = document.getElementById('jinaHolder2');

var nesh = localStorage.getItem('banklogs');
var vpnButn = document.getElementById('vpn');

var thePerson =  `Anonymous <hr id="hr-t">`;

auth.onAuthStateChanged(user => {
	if(!user) { 
		auth.signInAnonymously();
	} else {
		var theGuy = user.uid;
		var userCred = 'Anonymous';
	
		if(user.email) {
			var theaddress = user.displayName;
			jinaHolder.value = theaddress;
			theGuy = user.email;
			userCred = [user.displayName];
			thePerson = `${theaddress}. <hr id="hr-t">`;
		} 

		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => { 
			if(!doc.exists) { 
				return docRef.set({ 
					userCred: userCred, banks: []
				});
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

			vpnButn.removeAttribute('href');
			vpnButn.addEventListener('click', () => {
				$('#profileModal').modal('show'); 
			});
			vpnButn.innerHTML = `
				Total: ${total} <img src=${(JSON.parse(nesh)[0].image)}> 
			`; 
		} else {
			if(user.email) {
				vpnButn.innerHTML = `
					Bank Log <img src="img/partners/ticket.png">
				`;
				vpnButn.setAttribute('href', 'email');
			} 
		}
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

