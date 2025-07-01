let items = [];

var table1 = jQuery('#example1').DataTable();
var theLogo = document.getElementById('logo');
var thetotS = document.getElementById('thetot');
var theNos1 = document.getElementById('theno1');
var logs = localStorage.getItem('banklogs');

var Ths1 = document.getElementById('ths-1');
var Ths2 = document.getElementById('ths-2');
var Ths3 = document.getElementById('ths-3');
var Ths4 = document.getElementById('ths-4');

const login = firebase.auth(); 

var vpnButns = document.getElementById('vpn');
var cartLen = document.getElementById('cartlength');
var showToas = document.getElementById('showtoasts');

if(localStorage.getItem('banklogs')) {
    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {

        items = JSON.parse(localStorage.getItem('banklogs'));
        document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

        items.map(data=>{
            var image = `<td><img src=${data.image}></td>`
            var balance = `<td class="btn-balance">${data.balance}</td>`
            var price = `<td class="btn-price">${data.price}</td>`
            var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
            var account = `<td>${data.account}</td>`
            var website = `<td>${data.website}</td>`
            var info1 = `<td>${data.info1}</td>`
            var info2 = `<td>${data.info2}</td>`
            var info3 = `<td>${data.info3}</td>`
            var info4 = `<td>${data.info4}</td>`
            
            table1.row.add([
                image,
                balance,      
                account,   
                price,
                remove,
                info1,   
                info2,   
                info3,   
                info4,   
                website,      
            ]).draw();
        });


        for(var i = 0; i < items.length; i++) {
            var cartRow = document.createElement('tr');
            var cartRow2 = document.createElement('li');
            cartRow.classList.add('table-warning');
            cartRow2.classList.add('total','bg-black');
            var cartItems =  document.getElementsByClassName('champez3')[0];
    
            var cartRowContents = `
                <td><img src=${items[i].image}></td>       
                <td>
                    WAIT
                    <i class="fas fa-spin fa-sync-alt spinner-bordez"></i>
                    <hr id="hr-pend">
                    <span>${(items[i].balance).replace('Balance: ','')}</span> 
                </td>
                <td id=${'table-id' + items.indexOf(items[i])} style="filter: blur(0px); white-space: normal !important;"></td>  
                <td>${items[i].account}</td>
                <td>${(items[i].price).replace('Price: ', '')}</td>
                <td>${items[i].info1}</td>
                <td>${items[i].info2}</td>
                <td>${items[i].info3}</td>
                <td>${items[i].info4}</td>
                <td>${items[i].website}</td>
            `;
            cartRow.innerHTML = cartRowContents;
            cartItems.prepend(cartRow);



            var cartCol = document.createElement('div');
            cartCol.classList.add('alert','alert-warning','alert-dismissible');
            var cartColItems = document.getElementsByClassName('cart-alerts')[0];
            var cartColContents = `
                <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> 
                PENDING Sale <strong>${items[i].account}</strong>, ${items[i].balance}
                <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
            `;
            cartCol.innerHTML = cartColContents;
            cartColItems.prepend(cartCol);
        }
    

        var removeFromCartButtons = document.getElementsByClassName('btn-remove');
        for(var i = 0; i <removeFromCartButtons.length; i++){
            var button = removeFromCartButtons[i];
            button.addEventListener('click', removeCartItem)
        }
    
        updateCartTotal();

        document.getElementById('last-alert').classList.add('display-none');
    } else {
        cartLen.style.display = 'none'; 
    }
} else {
    cartLen.style.display = 'none'; 
}


function showThis() {
    login.onAuthStateChanged(user => {
        if(user) {
            setTimeout(() => {
                window.location.assign('checkout');
            }, 1000);
        } 
    });
}
showToas.addEventListener('click', showThis);   



document.getElementById('balance1').innerHTML = '$5,540';
document.getElementById('balance2').innerHTML = '$5,370';
document.getElementById('balance3').innerHTML = '$5,405';
document.getElementById('balance4').innerHTML = '$5,523';
document.getElementById('balance5').innerHTML = '$5,702';
document.getElementById('balance6').innerHTML = '$5,340';
document.getElementById('balance7').innerHTML = '$5,087';
document.getElementById('balance8').innerHTML = '$5,259';
document.getElementById('balance9').innerHTML = '$5,820';

document.getElementById('balance10').innerHTML = '$5,805';
document.getElementById('balance11').innerHTML = '$5,214';
document.getElementById('balance12').innerHTML = '$5,390';
document.getElementById('balance13').innerHTML = '$5,832';
document.getElementById('balance14').innerHTML = '$5,439';
document.getElementById('balance15').innerHTML = '$5,228';
document.getElementById('balance16').innerHTML = '$5,910';
document.getElementById('balance17').innerHTML = '$5,104';
document.getElementById('balance18').innerHTML = '$5,724';
document.getElementById('balance19').innerHTML = '$5,863';
document.getElementById('balance20').innerHTML = '$5,270';
document.getElementById('balance21').innerHTML = '$5,309';
document.getElementById('balance22').innerHTML = '$5,183';

var jobs = document.getElementsByClassName('prized');
for(j=0; j< jobs.length; j++) {
    var theJob = jobs[j];
    var thePrize = theJob.parentElement.children[1].children[2].innerText;
    
    var thePr = parseFloat((thePrize.replace("$", "").replace(",", "") / 47).toFixed(0)).toLocaleString();
    theJob.innerHTML = '$'+ thePr;
}



function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[3].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[9].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;

    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4);
    buttonClicked.parentElement.parentElement.remove();
}


function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    thetotS.innerHTML = `Total:  <span>$${total.toLocaleString()}</span>`;
    theNos1.innerHTML =  'Cart Total: $' + total.toLocaleString();
    

    const bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
    const bankImg = (JSON.parse(localStorage.getItem('banklogs'))[0].image);
    theLogo.src = `${bankImg}`;
    document.getElementById('jinaHolder2').innerHTML = `${bankLog} Account`;

    if(bankLog.includes('Chime') || bankLog.includes('PNC') ||
       bankLog.includes('Navy') || bankLog.includes('BBVA') || bankLog.includes('Wells')) {
        theLogo.classList.add('bit-img'); theLogo.classList.add('logo-50');
    } 
    
    if(bankLog.includes('M&T') || bankLog.includes('TD') || bankLog.includes('Woodforest')) {
        theLogo.classList.add('bit-img'); theLogo.classList.add('logo-90');
    } 

    if(bankLog.includes('Truist')) {
        theLogo.setAttribute('src', 'img/carousel/truist.jpg');
        theLogo.classList.add('logo-50'); 
    }

    if(JSON.parse(localStorage.getItem('banklogs')).length > 1) {
        document.getElementById('profileModal').classList.add('modal-cart');
        if(window.innerWidth > 700) {
            Ths1.innerHTML = 'Banklogs'; Ths2.innerHTML = 'Banklogs';
            Ths3.innerHTML = 'Banklogs'; Ths4.innerHTML = 'Banklogs';
        }
    }

    if(bankLog.includes('America') || bankLog.includes('Barclays')) {
        document.getElementById('th-id').innerHTML = 'AccountID';
    } 



    var id = setInterval(frame, 1000);
    if(!localStorage.getItem('timeSet')) {
        var jo = new Date(); var po = jo.getTime(); var p1ko = po/1000; var p1knoDecimalo = Math.trunc(p1ko);
        localStorage.setItem('seconds-left', p1knoDecimalo); localStorage.setItem('timeSet', true);
    }  let width = 900;
    function frame(){
        var j = new Date(); var p = j.getTime(); var p1k = p/1000; var p1knoDecimal = Math.trunc(p1k);
        var theTime = localStorage.getItem('seconds-left');
        var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
        width = 900 - timeDifference;

        if(width <= 840) {
            setTimeout(() => {
                if(localStorage.getItem('timeSet')) { localStorage.removeItem('timeSet'); }
            }, 300); var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        } else {
            var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds }
        }
    }
}