function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightblue');
  //left guy
  //head
  circle(125, 250, 30);
  line(120, 243, 120, 250);
  line(130, 243, 130, 250);
  curve(125, 255, 120, 255, 130, 255, 145, 200)
  //torso
  line(125, 265, 125, 350);
  //left arm
  line(125, 300, 100, 250);
  //right arm
  line(125, 300, 150, 250);
  //left leg
  line(125, 350, 100, 375);
  //right leg
  line(125, 350, 150, 375);
  
  //right guy
  circle(250, 250, 30);
  line(245, 243, 245, 250);
  line(255, 243, 255, 250);
  curve(250, 255, 250, 255, 240, 255, 260, 200);
  //torso
  line(250, 265, 250, 350);
  //left arm
  line(250, 300, 200, 250);
  //right arm
  line(250, 300, 300, 250);
  //left leg
  line(250, 350, 225, 375);
  //right leg
  line(250, 350, 275, 375);
}