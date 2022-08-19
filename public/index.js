// ||||||||||||||||||||||||||||| FXHASH TEMPLATE - HYDRA + P5|||||||||||||||||||||||||||||||||||||||||||||||||||||||//            
// Author: nt_worm  ||||  Twitter: @nt_worm  
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||//
/////////////////////////////// CANVAS FUNCTIONS/ //////////////////////////////////
let WIDTH;
let HEIGHT;
let hydracanvas = document.createElement('canvas')
hydracanvas.width = 1500
hydracanvas.height = 1500
let hydra = new Hydra({detectAudio: false, canvas: hydracanvas})
let p5graphics

function setup (){
  WIDTH = windowWidth;
  HEIGHT = windowWidth;
  hydra.setResolution(WIDTH, HEIGHT);
  mycanvas = createCanvas(WIDTH,HEIGHT, WEBGL)
  p5graphics = createGraphics(WIDTH, HEIGHT)
}
/////////////////////////////////////HYDRA CANVAS///////////////////////////////////
// src(o0)
// .modulateHue(src(o0).scale(4.01),1)
// .layer(osc(1,0,1.2, 3).hue(1.8).kaleid(1)
// .contrast(1).mask(shape(4,0.7,0.004)))
// .add(shape(444, 0.2, 0, 0.02).scrollX(0.9,0).scale(1,0.9))
// .add(shape(44, 0.2, 0, 0.05).scrollX(0.28,0)).scrollY(2.1, 0)
// .blend(shape(4,-5.04, 4).scrollY(-12, 0, 2.2))
// .scrollX(-1, 0)
// .scrollY(-1.1, 0)
// .pixelate(11,11)
// .out();
osc (10,10,10)
.out (o0)
////////////////////////////////P5 ANIMATION////////////////////////////////////////
function draw() {
  noStroke()
  plane(WIDTH,HEIGHT)
  p5graphics.drawingContext.drawImage(hydracanvas, 0, 0)
  texture(p5graphics)
  
  
}
























