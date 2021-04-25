var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = 'red';

document.getElementById('color').oninput = function(){
	myColor = this.value;
}






canvas.onmousemove = function(event){
	canvas.onmousedown = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.fillRect(x, y, 10, 10);
		cts.fillStyle = myColor;
		ctx.fill();
    }
    canvas.onmouseup = function(){
    	canvas.onmousemove = null;
    }
}