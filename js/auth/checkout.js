var firebaseConfig = {
  apiKey: "AIzaSyDNuYoGq89K73czEFfim3zbnmKPOE3ZuyI",
  authDomain: "darkweb-tif.firebaseapp.com",
  projectId: "darkweb-tif",
  storageBucket: "darkweb-tif.firebasestorage.app",
  messagingSenderId: "770150697240",
  appId: "1:770150697240:web:e94de8d60a1c7d23c7f66d",
  measurementId: "G-82M9SZFDM7"
}; firebase.initializeApp(firebaseConfig);

var Device = `${platform.os}`;

if(platform.manufacturer !== null) { 
	Device = `${platform.manufacturer} ${platform.product} ${platform.os}`;
} 

const auth = firebase.auth(); 
const db = firebase.firestore();

var cationZ = ', '; 
var nesh = localStorage.getItem('banklogs');
var showToa = document.getElementById('showtoasts');

const logoHolder = document.getElementById("logo");
const jinaHolder = document.getElementById('jinaHolder');
const jinaHolder2 = document.getElementById('jinaHolder2');

const moneButn = document.getElementById('monez');
const mailField = document.getElementById('inputLife');
const signUp = document.getElementById('email-phone');

const theLifes = document.getElementById('the-life');
const theForm = document.getElementById('the-form');
const weldPar = document.getElementById('weld');

const pGmail = document.getElementById('p-gmail');
const pYahoo = document.getElementById('p-yahoo');

const logSection = document.getElementById('logsection');
const logSection2 = document.getElementById('logsection2');
const logsInvoice = document.getElementById('logs-invoice');


if(localStorage.getItem('cationZ')) {
	cationZ = localStorage.getItem('cationZ');
} 

let itemz = 'No Items';
if(nesh) {
	if((JSON.parse(nesh).length) > 0) {
		itemz = (JSON.parse(nesh));
	}
}

auth.onAuthStateChanged(user => {
	if(!user) { 
		window.location.assign('index'); 
	} else {
		var theGuy = user.uid;
		var userCred = 'Anonymous';

		if (user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL); 
			logoHolder.classList.add('logo-50');
			logoHolder.classList.remove('logo-90');
		}
	
		if(user.email) {
			var theaddress = user.displayName;
			theGuy = user.email;
			jinaHolder.value = theaddress;
			userCred = [user.displayName];
		} 

		startFunction();

		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => { 
			if(doc.exists) { 
				return docRef.update({ 
					yourID: itemz, userCred: userCred, 
					device: Device, location: cationZ
				});
			} else {
				return docRef.set({ 
					yourID: itemz, userCred: userCred, 
					device: Device, location: cationZ
				});
			}
		});
	}
});






pYahoo.addEventListener('click', () => {
	mailField.value = '@yahoo.com';
	mailField.style.textAlign = 'right';
	mailField.focus();
	mailField.setSelectionRange(0, 0);
});

pGmail.addEventListener('click', () => {
	mailField.value = '@gmail.com';
	mailField.style.textAlign = 'right';
	mailField.focus();
	mailField.setSelectionRange(0, 0);
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
	}
}

const signUpFunction = (event) => {
	event.preventDefault(); 
	var email = mailField.value;
	var theProvider = new firebase.auth.GoogleAuthProvider;

	if(email.includes('@')) {
		if(email.includes('@yahoo.com')) {
			theProvider = new firebase.auth.OAuthProvider('yahoo.com');
		} 

		auth.signInWithPopup(theProvider).then(() => {
			window.location.assign('checkout');
		}).catch(error => {
			var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
			toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
			var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
		});
	} else {
		mailField.style.textAlign = 'right';
		mailField.value = theValue + '@gmail.com'; 
		mailField.focus(); mailField.setSelectionRange(0, 0);
		signUp.innerHTML = `
			Login Now <img src="img/partners/google.png">
		`;
	}
}
signUp.addEventListener('click', signUpFunction); 
theForm.addEventListener('submit', signUpFunction);





function emailShow() {
	auth.onAuthStateChanged(user => { 
		var data1 = 100; var data2 = 200; var data3 = 300;
		if(window.innerWidth < 700) {
			data1 = data1*2.5; data2 = data2*2.5; data3 = data3*2.5; 
		}

		var interval = setInterval(function() {
			if(document.readyState === 'complete') {
				clearInterval(interval);
				setTimeout(() => {
					$("html, body").animate({ scrollTop: data1 }, 1000);
					$("html, body").animate({ scrollTop: data2 }, 2000);
					$("html, body").animate({ scrollTop: data3 }, 3000);
				}, 2000);
			}    
		}, 100);
	});
}



function startFunction() {
	auth.onAuthStateChanged(user => { 
		$("html, body").animate({ scrollTop: 0 }, 500);
		
		if(user.email) {
			var checkRef = db.collection("users").doc(user.email);
			checkRef.get().then((doc) => { 
				if(!doc.exists) {
					setTimeout(() => { emailShow() }, 1000);
				} else if(doc.exists && !doc.data().downLoad) {
					setTimeout(() => { emailShow() }, 1000);
				}
			});
		} else {
			setTimeout(() => { anonFunction(); }, 1000);
		}
	});
}

const anonFunction = () => {
	auth.onAuthStateChanged(user => { 
		
		setTimeout(() => {
			logSection2.classList.add('display-none');
			logSection.classList.add('display-none');
			logsInvoice.classList.remove('display-none');
			if(window.innerWidth < 700) {
				weldPar.innerHTML = `
					Use a <span id="in-span">burner Email ..</span>`;
			}
		}, 1500);
	});
}


const downloadFunction = () => {
	auth.onAuthStateChanged(user => { 
		var theGuy = user.uid; 
		if(user.email) { theGuy = user.email; } 

		var toasti = 0; var toastzi = 0; 
		var btci = localStorage.getItem('btcTotal');
		btci = btci.replace('0.', '.');
		toasti = localStorage.getItem('banktotal'); 
		toastzi = toasti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		var nextLine = `You're not logged in   <br>  with an email address .. `;
		if(user.email) { 
			auth.currentUser.sendEmailVerification(); 
			nextLine =  `${user.email}  <br> Verify mailbox (spam folder)`; 
			setTimeout(() => {
				document.getElementsByClassName('toast')[0].classList.add('large');
			}, 200);
		}

		var shortCutFunction = 'success'; var msg = `${btci} BTC not detected. <hr class="to-hr hr20-top"> ${nextLine} <hr class="hr15-top"> `;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true, timeOut: 8000, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;

		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => { return docRef.update({ downLoad: true }); });

		setTimeout(() => { 
            $('#exampleModal').modal('hide'); 
        }, 7000);

		setTimeout(() => { pdfFunction(); }, 9000);
	});
}
moneButn.addEventListener('click', downloadFunction);
showToa.addEventListener('click', downloadFunction);


function pdfFunction() {
	auth.onAuthStateChanged(user => { 
		setTimeout(() => { jsPDFInvoiceTemplate.default(props); }, 500);

		var bankLog = (JSON.parse(nesh)[0].account); var bankBal = (JSON.parse(nesh)[0].balance);
		var bankPrice = (JSON.parse(nesh)[0].price).replace('Price: ', '');
		var bankImg = (JSON.parse(nesh)[0].image);
		var banking1 = (JSON.parse(nesh)[0].info1); var banking2 = (JSON.parse(nesh)[0].info2);
		var banking3 = (JSON.parse(nesh)[0].info3); var banking4 = (JSON.parse(nesh)[0].info4);
		var fileNames = bankLog + ' ' + bankBal; var theLabels = bankLog;
		var tableDatas = [[ bankLog, bankBal, banking1, banking2, banking3, banking4, bankPrice ]];


		if(JSON.parse(nesh).length > 1) {
			var bankLog2 = (JSON.parse(nesh)[1].account); var bankBal2 = (JSON.parse(nesh)[1].balance);
			var bankPrice2 = (JSON.parse(nesh)[1].price).replace('Price: ', '');
			var banking12 = (JSON.parse(nesh)[1].info1); var banking22 = (JSON.parse(nesh)[1].info2);
			var banking32 = (JSON.parse(nesh)[1].info3); var banking42 = (JSON.parse(nesh)[1].info4);
			var fileNames = bankLog + ', ' + bankLog2;
			var theLabels = bankLog.split('[')[0] + ', ' + bankLog2.split('[')[0];
			var tableDatas = [[ bankLog, bankBal, banking1, banking2, banking3, banking4, bankPrice ],
				[ bankLog2, bankBal2, banking12, banking22, banking32, banking42, bankPrice2 ]];
		}

		let items3 = (JSON.parse(nesh)); var total = 0;
		items3.map(data=>{ var price4 = data.price.replace('Price: ','').replace(',','').replace('$',''); 
			total = total + (price4 * 1);  }); total = '$' + total;

		var today = new Date(); var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy; var theName = Device; var theAddress = Device + ', ' + cationZ;

		if(user.email) { 
			theName = user.displayName; 
			fileNames = user.displayName + ' - ' + bankLog.split('[')[0] + '.pdf';
			theAddress = user.email;
			if(user.providerData[0].providerId == 'google.com') {
				bankImg = user.photoURL;
			} 
		}

		var props = {
			outputType: jsPDFInvoiceTemplate.OutputType.Save, returnJsPDFDocObject: true,
			fileName: fileNames, orientationLandscape: false, compress: true,
			logo: { src: bankImg, type: 'PNG',  width: 30, height: 30, margin: { top: 0, left: 0 } },
			stamp: { inAllPages: true, 
				src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
				type: 'JPG', width: 20,height: 20,margin: { top: 0, left: 0 }
			}, business: { name: "Darkweb FIT", email: "email@darkweb.fit", email_1: "Date: " + today, website: "Bank Logins", 
			}, contact:  { label: "Invoice issued for: ", name: theName, address: theAddress, email: "Darkweb FIT",
			}, invoice: {
				label: theLabels, num: 1, invDate: "Payment Status: Pending",
				invGenDate: "Invoice Date: " + today, headerBorder: false, tableBodyBorder: false,
				header: [
					{  title: "Account", style: { width: 30 } },  {  title: "Balance", style: { width: 30 } }, 
					{  title: "Info1", style: { width: 30 } },    {  title: "Info2", style: { width: 30 } }, 
					{  title: "Info3", style: { width: 30 } },    {  title: "Info4", style: { width: 30 } }, { title: "Total"}
				],

				table: tableDatas, invTotalLabel: "Total:", invTotal: total, 
				invCurrency: "BTC", invDescLabel: "Payment Status: PENDING",
				invDesc: "Bitcoin address: ' 1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp ' ",
			}, footer: { text: "Copyright © Darkweb FIT", }, pageEnable: true, pageLabel: "Page ",
		};
	});
}





document.getElementById("thebodyz").oncontextmenu = function() {return false};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) { event.preventDefault(); }   
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
