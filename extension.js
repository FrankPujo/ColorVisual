document.getElementById("btn").addEventListener("click", changeColour);

function changeColour() {
	var colour = document.getElementById("colour").value;
	var square = document.getElementById("square");
	var ctx = square.getContext( "2d" );
	ctx.fillStyle = colour;
	ctx.fillRect(10, 10, 200, 200)
	console.log( colour );
}