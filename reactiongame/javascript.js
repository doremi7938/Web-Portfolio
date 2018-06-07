function getRandomColor(){
    var letters='0123456789ABCDEF'.split('');
    var color='#';
    for(var i=0; i<6; i++){
    	color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
var createdTime;
var clickTime;
var reactionTime;
function makeup(){
    var x=Math.random();
    x=x*3000;
    setTimeout(function(){
    	if(Math.random()<0.5){
    	    document.getElementById("squre").style.borderRadius="100px";
    	}
    	else{
    		document.getElementById("squre").style.borderRadius="0";
    	}
    	var top=Math.random();
    	top=top*500;
    	var left=Math.random();
    	left=left*700;
    	document.getElementById("squre").style.top=top+"px";
    	document.getElementById("squre").style.left=left+"px";
    	document.getElementById("squre").style.backgroundColor=getRandomColor();
    	document.getElementById("squre").style.display="block";
    	createdTime=Date.now();
    },x)
}
document.getElementById("squre").onclick=function(){
	this.style.display="none";
	makeup();
	clickTime=Date.now();
	reactionTime=(clickTime-createdTime)/1000;
	document.getElementById("mumu").innerHTML=reactionTime;
}
makeup();