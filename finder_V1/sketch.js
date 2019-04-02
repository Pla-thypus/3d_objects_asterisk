var scan;
let angle = 0;
var li =100;
var canvas;



function setup() {
  
  canvas = createCanvas(945, 835, WEBGL);
  
  
  scan = loadModel('finder_V2.obj');

  frameRate(30);
  angleMode(DEGREES);
  

}

function draw() {
  
  background(0);

  translate(0,95,0);
  orbitControl(3);
  smooth();
  
  
  scale(2);
  
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