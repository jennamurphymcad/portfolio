var angle1=6;
var angle2=100;
var scalar = 70;

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(0);

  var ang1 = radians(angle1);
  var ang2 = radians(angle2);

  var x1 = width/2 + (scalar * cos(ang1));
  var x2 = width/2 + (scalar * cos(ang2));

  var y1 = height/2 + (scalar * sin(ang1));
  var y2 = height/2 + (scalar * sin(ang2));


 for (x = 10; x <= 500; x = x +100)
 for (y = 20; y <= y + 500; y = y +5){

ellipse(x, y/2, x2-100, y2);
}
  angle1 += 2;
  angle2 += 3;
}
