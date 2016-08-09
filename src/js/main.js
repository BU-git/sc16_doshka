// mobile-recognier v1
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    $(location).attr('href', 'index-mobile.html');
}
// mobile-recognier v2
if(typeof window.orientation !== 'undefined'){
	$(location).attr('href', 'index-mobile.html');
}

function toShop() {
	document.getElementById('position').style.left = '0';
};

function toMain() {
	document.getElementById('position').style.top = '0';
	document.getElementById('position').style.left = '-100vw';
};

function toDoshkaWoods() {
	document.getElementById('position').style.top = '-100vh';
	document.getElementById('position').style.left = '-100vw';
};

function toCategory() {
	document.getElementById('position').style.left = '-200vw';
};


function contactDisplay() {
	document.getElementById('phones').style.display = 'table';
	// alert ('work');
}