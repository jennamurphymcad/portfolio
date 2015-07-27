var a = 800
var b = 500
var count = 120

function setup() {
  createCanvas(a, a);
}

function draw() {
  for (x = 100; x <= a; x = x + 100)
    for(y = 100; y <= b*2; y = y + 10) {
      var s = map(count, 60, 0, 0, HALF_PI*1);
      strokeWeight(.5);
      arc(x, y, 20, 20, s, s + PI);
      count--;


}

}
