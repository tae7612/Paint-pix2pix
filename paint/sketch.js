let type = "pen";
let scribble = new Scribble();  
scribble.bowing = 1;          // changes the bowing of lines
scribble.roughness = 1;   
let output, penBtn, eraserBtn, squareBtn, circleBtn, clearBtn;
let pix2pix, modelReady = false, isTransfering = false;
let w,h;

function preload(){
    
}

function setup() {
    
    SIZE = windowWidth/2.5;
    w = windowWidth/2;
    h = windowWidth/2.3;
   
    let sketchBoard = createCanvas(w, h);
    sketchBoard.class('border-box').parent('canvasContainer');
    
    
    // Selcect output div container
    output = select('#output');
    
    statusMsg = select('#status');
    

    pixelDensity(1);
    background(255);
    
    //Create Sliders
   
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
    
////////////////////  Bowing Controls /////////////////////
    bowOne = select('#bowOne');
    bowOne.mousePressed(function() {
        scribble.bowing = 1;
    });
    
    bowTwo = select('#bowTwo');
    bowTwo.mousePressed(function() {
        scribble.bowing = 5;
    });
    
    bowThree = select('#bowThree');
    bowThree.mousePressed(function() {
        scribble.bowing = 10;
    });
    
    bowFour = select('#bowFour');
    bowFour.mousePressed(function() {
        scribble.bowing = 15;
    });
    
    bowFive = select('#bowFive');
    bowFive.mousePressed(function() {
        scribble.bowing = 20;
    });
    
    
    ////////////////////  Roughness Controls /////////////////////

    rouOne = select('#rouOne');
    rouOne.mousePressed(function() {
        scribble.roughness = 1;
    });
    
    rouTwo = select('#rouTwo');
    rouTwo.mousePressed(function() {
        scribble.roughness = 2;
    });
    
    rouThree = select('#rouThree');
    rouThree.mousePressed(function() {
        scribble.roughness = 4;
    });
    
    rouFour = select('#rouFour');
    rouFour.mousePressed(function() {
        scribble.roughness = 8;
    });
    
    rouFive = select('#rouFive');
    rouFive.mousePressed(function() {
        scribble.roughness = 10;
    });
    
    
    
    
    
    // Set stroke to black
    stroke(0);
    pixelDensity(1);
    
    background(255);

}

function draw() {
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


// Clear the canvas
function clearCanvas() {
  background(255);
}


function windowResized() {
    resizeCanvas(windowWidth/2, windowWidth/2.3);
    background(255);
}

