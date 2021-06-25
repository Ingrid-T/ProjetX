var index = 0;
var images = [];
images[0]='img/hippie.jpg'
images[1]='img/multicolor.jpg'
images[2]='img/orange.jpg'
images[3]='img/jaune.jpg'
images[4]='img/colorful.jpg'
images[5]='img/tiedye.jpeg'

var time = 2000;

function changeimg(){

	document.autoslide.src=images[index];

	if(index < images.length-1){
		index++;
	}else{
		index=0;
	}
	setTimeout("changeimg()", time);
}
window.onload = changeimg;