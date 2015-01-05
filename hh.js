var cont = document.getElementById('download').getElementsByTagName('li'),
    bull = document.getElementById('bullet').getElementsByTagName('a')
var index;
var getCurIndex = function(){
	for(var i = 0; i < cont.length; i++){
		if(cont[i].className.indexOf('selected')!=-1)
			return i;
	}
}
var move = function(flag){
	index = getCurIndex();
	if (flag){
		index++;
		if(index >= cont.length)
			index = 0;
	}
	display(index);
}

var display = function(index){	
	for(var i=0; i<bull.length; i++){
		cont[i].className = '';
		bull[i].className = '';
	}
	cont[index].className='selected';
	bull[index].className='show';
}
var autoTabStart = function(){
	focusTimeHandler = setInterval(function(){move(true);},1000);
}
var autoTabStop = function(){
	clearInterval(focusTimeHandler);
}
for(var i=0; i<bull.length; i++){
	bull[i].onclick=function(){
		for(var j = 0; j<bull.length; j++){
			if(this == bull[j])
				index = j;
		}
		display(index);
	}
}