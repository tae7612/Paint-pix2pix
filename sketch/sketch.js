let type = "pen";
let scribble = new Scribble();  
scribble.bowing = 3;          // changes the bowing of lines
scribble.roughness = 1;   
let output, penBtn, eraserBtn, squareBtn, circleBtn, clearBtn;
let pix2pix, modelReady = false, isTransfering = false;

function preload(){
    
}

function setup() {
    
    SIZE = 256;
   
    let sketchBoard = createCanvas(SIZE, SIZE);
    sketchBoard.class('border-box').parent('canvasContainer');
    
    inputImg = loadImage('../images/input.png', drawImage);
    
    // Selcect output div container
    output = select('#output');
    
    statusMsg = select('#status');
    

    pixelDensity(1);
    background(255);
    gui = createGui();
    
    // Select 'transfer' button html element
    transferBtn = select('#transferBtn');
    
    // Select 'clear' button html element
    clearBtn = select('#clearBtn');
    clearBtn.mousePressed(function() {
        clearCanvas();
    });
    
    penBtn = select('#penBtn');
    penBtn.mousePressed(function() {
        type = "pen";
    });
    
    eraserBtn = select('#eraserBtn');
    eraserBtn.mousePressed(function() {
        type = "eraser";
    });
    
    squareBtn = select('#squareBtn');
    squareBtn.mousePressed(function() {
        type = "square";
    });
    
    circleBtn = select('#circleBtn');
    circleBtn.mousePressed(function() {
        type = "circle";
    });


    // Set stroke to black
    stroke(0);
    pixelDensity(1);
    
    background(255);
    // Create a pix2pix method with a pre-trained model
    pix2pix = ml5.pix2pix('models/edges2pikachu.pict', modelLoaded);
}

function draw() {
    fill("black");
    stroke("black");
    if(mouseIsPressed){
  	//stroke(c,75,100)
        if(type == "pen"){
            scribble.scribbleLine(mouseX,mouseY,pmouseX,pmouseY); 
        } else if(type === "eraser"){
            fill(255);
            stroke(255);
            scribble.scribbleLine(mouseX,mouseY,pmouseX,pmouseY);
            console.log("eraser");
            
        } else if(type === "square"){
            
            scribble.scribbleRect( mouseX, mouseY, 50, 50 );
            console.log("square");
            
        } else if(type === "circle"){
            
            scribble.scribbleEllipse( mouseX, mouseY, 50, 50 );
            console.log("circle");
        }
        
        
            
  	}
    
    
    
       
    
    
}




function mouseReleased() {
  if (modelReady && !isTransfering) {
    transfer()
  }
}


// A function to be called when the models have loaded
function modelLoaded() {
  // Show 'Model Loaded!' message
  statusMsg.html('Model Loaded!');

  // Set modelReady to true
  modelReady = true;

  // Call transfer function after the model is loaded
  transfer();

  // Attach a mousePressed event to the transfer button
  transferBtn.mousePressed(function() {
    transfer();
  });
}

// Draw the input image to the canvas
function drawImage() {
  image(inputImg, 0, 0);
}

// Clear the canvas
function clearCanvas() {
  background(255);
}

function transfer() {
  // Set isTransfering to true
  isTransfering = true;

  // Update status message
  statusMsg.html('Applying Style Transfer...!');

  // Select canvas DOM element
  const canvasElement = select('canvas').elt;

  // Apply pix2pix transformation
  pix2pix.transfer(canvasElement, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result && result.src) {
      // Set isTransfering back to false
      isTransfering = false;
      // Clear output container
      output.html('');
      // Create an image based result
      createImg(result.src).class('border-box').parent('output');
      // Show 'Done!' message
      statusMsg.html('Done!');
    }
  });
}
