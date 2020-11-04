let SIZE = 900;
let type = "";
let gui;
let scribble = new Scribble();  
scribble.bowing = 3;          // changes the bowing of lines
scribble.roughness = 1;   



function preload(){
    
}

function setup() {
    
    SIZE = windowWidth/2;
   
    createCanvas(SIZE, windowHeight);
    
     strokeWeight(2);
  pixelDensity(1);
    background(255);
    gui = createGui();
//     s = createSlider("Slider", 50, 50);
    
}

function draw() {
    rectMode(CENTER);
    let sketchX = width/1.7;
    let sketchY = height/2;
    let size = SIZE-200;
    square(sketchX, sketchY, size);
    if(mouseIsPressed){
  	//stroke(c,75,100)
        
        if(btnClicked(sketchX,sketchY,size)){
            scribble.scribbleLine(mouseX,mouseY,pmouseX,pmouseY);   
        }
        
  	}
    
    let x = width/8;
    let y = 200;
    y = y + 70;
    drawPencilBtn(x, y, 50);
    y = y + 70;
    drawEraserBtn(x, y, 50);
    y = y + 70;
    drawSquareBtn(x, y, 50);
    y = y + 70;
    drawRsquareBtn(x, y, 50);
    y = y + 70;
    drawCircleBtn(x, y, 50);
    
    
    
    
    
//   for (let i = 0; i < 5; i++) {
//        
//        square(width/8, y , 50);
//   }
    
    

}


function drawPencilBtn(x, y, size){
    square(width/8, y , 50);
    if(mouseIsPressed){
        if(btnClicked(x,y,size)){
            type = "pencil";
        }
    } 
}

function drawSquareBtn(x, y, size){
    square(width/8, y , 50);
    if(mouseIsPressed){
        if(btnClicked(x,y,size)){
            type = "square";
        }
    } 
}

function drawRsquareBtn(x, y, size){
    square(width/8, y , 50);
    if(mouseIsPressed){
        if(btnClicked(x,y,size)){
            type = "rsquare";
        }
    } 
}

function drawCircleBtn(x, y, size){
    square(width/8, y , 50);
    if(mouseIsPressed){
        if(btnClicked(x,y,size)){
            type = "circle";
        }
    } 
}

function drawEraserBtn(x, y, size){
    square(width/8, y , 50);
    if(mouseIsPressed){
        if(btnClicked(x,y,size)){
            type = "eraser";
        }
    } 
}
function btnClicked(x,y,size){
    if((mouseX > (x - size/2 )) && (mouseX < (x + size/2 )) && (mouseY > (y - size/2 )) && (mouseY < (y + size/2))){
        return true;
    }
}

function windowResized() {
    SIZE = windowWidth/2;
   
    resizeCanvas(SIZE, windowHeight);
     background(255);
}

