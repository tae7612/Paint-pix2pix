let type = "pen";
let scribble = new Scribble();  
scribble.bowing = 1;          // changes the bowing of lines
scribble.roughness = 2;
let circles = [];
let bg, sketchBtn;
let colors = ['#98CDC5','#FAA091','#83BDD9','#FCC44D','#5E4B56'];

function preload(){
    myFont = loadFont('fonts/Itim-Regular.ttf');
}

function setup() {
    
    let canvas = createCanvas(windowWidth, windowHeight);
    
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    
    
   
//   const canvasElement = select('canvas');
//    canvasElement.addClass("landing");
    bg = loadImage('images/cute_bg.jpg');
    // Create the characters.
  for (let i=0; i<40; i++) {
    circles.push({
      x: random(width), 
      y: random(height),
      yOffset: 0, // Helps us make a visually "bobbing" character.
      vx: random(-1, 3),
      vy: random(-1, 3),
      size: random(50, 100),
      clr: random(colors),
       // Used to determine how they shake.
    })
  }
    

    

}

function draw() {
    
    clear();
    background(220, 10)
    // Draw the citizens.
  for (let c of circles) {
    
    fill(c.clr);
    stroke( "black");
    scribble.scribbleEllipse( c.x, c.y + c.yOffset, c.size, c.size);
//      scribble.scribbleFilling( xCoords, yCoords , gap, angle );
  }
  
  // Move the citizens
  for (let c of circles) {
    if (!c.dead) {
      c.x += c.vx; 
      c.y += c.vy; 
    }
    
    // If the bump a wall...
    if (c.x > width || c.x < 0) {
      c.vx = -c.vx;
    }
    if (c.y > height || c.y < 0) {
      c.vy = -c.vy;
    }
    
  }
    

    

    
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
}

