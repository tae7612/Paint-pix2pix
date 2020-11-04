let type = "pen";
let scribble = new Scribble();  
scribble.bowing = 3;          // changes the bowing of lines
scribble.roughness = 1;   
let output, penBtn, eraserBtn, squareBtn, circleBtn, clearBtn;
let pix2pix, modelReady = false, isTransfering = false;

function preload(){
    
}

function setup() {
    
    SIZE = windowWidth/2;
   
    let sketchBoard = createCanvas(SIZE, SIZE);
    sketchBoard.class('border-box').parent('canvasContainer');
    
    
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


// Clear the canvas
function clearCanvas() {
  background(255);
}

