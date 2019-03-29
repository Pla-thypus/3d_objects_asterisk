var scan;
let angle = 0;
var li =100;


function setup() {
  
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  scan = loadModel('scanner_V16-3.obj');

  frameRate(30);
  angleMode(DEGREES);
  

}

function draw() {
  
  background(0);

  translate(0,50,0);
  orbitControl(3,10);
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
  //rotateZ(angle * 0.5);

  model(scan);
  
  
  angle += -0.5;
  

}