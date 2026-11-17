function setup() {
    createCanvas(710,410, WEBGL);
 angleMode(DEGREES);
 normalMaterial();
}

function draw() {
    background(250);
     // Plane
  push();
  translate(-150, -100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();
  // Box
  push();
  translate(-175, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();

  // Cylinder
  push();
  translate(100, -100, 0);
  rotateWithFrameCount();
  cylinder(70, 70);
  pop();

  // Cone
  push();
  translate(275, -100, 0);
  rotateWithFrameCount();
  cone(50, 70);
  pop();
}

    function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}

