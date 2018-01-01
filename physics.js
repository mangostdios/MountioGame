var yv;
var xv;
var x;
var y;
var physics = {
friction: 0.8,
gravity: 2,
code: function() {
yv += physics.gravity;
y += yv;
x += xv;
xv = xv * physics.friction;
//draw character at (x,y);
if(/*collision*/) {
//platformer script
}
},
interval: setInterval(physics.code,10)
};

document.getElementsByTagName("body").addEventListener("onmousedown", function(event){
if (event.key === a) {
xv=-10;
}
if (event.key === d) {
xv=10;
}
});
