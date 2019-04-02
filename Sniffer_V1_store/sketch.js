var scan;
let angle = 0;
var li =100;
var canvas;

function setup() {
  
  canvas = createCanvas(315,315, WEBGL);
  
  
  scan = loadModel('sniffer_V2.obj');

  frameRate(30);
  angleMode(DEGREES);
  

}

function draw() {
  
  background(0);

  translate(0,30,-17);
  orbitControl(3);
  smooth();
  
  
  scale(0.2);
  
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