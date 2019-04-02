var scan;
let angle = 0;
var li =100;
var canvas;

/*function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}*/

function setup() {
  
  canvas = createCanvas(945, 835, WEBGL);
  
  
  scan = loadModel('scanner_V16-3.obj');

  frameRate(30);
  angleMode(DEGREES);
  

}

function draw() {
  
  background(0);

  translate(0,30,-50);
  orbitControl(3);
  smooth();
  
  
  scale(1.8);
  
  specularMaterial(255)
  noStroke()
  //stroke(255);
  //noFill();
  
  ambientLight(110);
  directionalLight(li,li,li,1,0.5,-1);
  directionalLight(li,li,li,-1,1,1);
  directionalLight(li,li,li,-1,-1,-1);
  
  
  //rotateX(angle * 0.5);
  rotateY(angle * 0.5);
  //rotateZ(angle * 0.2);

  model(scan);
  
  
  angle += -0.4;
  

}