//Create setup() function
function setup(){
  //Create canvas 500px wide and 500px high
  createCanvas(500, 500);
  // Inside the setup() function:

  //Draw horizontal and vertical guidelines
  
  //background('red');
}
function draw(){
//Create wall drawing inside draw() function
  //Set stroke color and weight
  stroke(127);
  strokeWeight(10);
  //Use a for loop to draw 10 vertical lines
  // Draw parallel lines:
  for(let posX = 0; posX < 10; posX++){
    line(posX * 25, 0, posX * 25, height/2);
  }
  // Draw polka dots:
  //Set no stroke and fill color
  fill('#ffd700');
  noStroke();
  //Use nested for loops to draw a grid of circles
  //Offset y positions of every other column by 10 pixels
  for(let posX = 0; posX < 10; posX++){
    for(let posY = 0; posY < 10; posY++){
      if(posX % 2 === 0){
        circle(posX * 25 + width/2, posY * 25 + 10, 10);
      } else {
        circle(posX * 25 + width/2, posY *25, 10);
      } 
    }
  }

// Draw checkered squares:
  //Set fill color

fill('red')
  //Use nested for loops to draw rows of squares
  //Offset y positions of every other column by 25 pixels
for(let posX = 0; posX < 10; posX++){
  for(let posY = 0; posY < 5; posY++){
    if(posX % 2 === 0){
      square(posX * 25, posY * 50 + height/2 + 25, 25)
    } else{
      square(posX * 25, posY * 50 + height/2, 25)
    }
  }
}

// Draw parallel diagonal lines:
  //Set stroke color and weight
  

  //Use a for loop to draw diagonal lines
  for(let i = 0; i < 10; i++){
    stroke(0,0,255);
    strokeWeight(10);
    line(width/2, height - i * 25, width/2 + i * 25, height)
    line(width/2 + i * 25, height/2, width, height - i * 25)
  }
  stroke(0)
  line(width/2, 0, width/2, height);
  line(0, height/2, 500, height/2);
  //borders
  line(0, 0, width, 0)
  line(500, 0, 500, height)
  line(0, height, width, height)
  line(0, 0, 0, height)
  //Set stroke color
  stroke(0,0,0)
  




}