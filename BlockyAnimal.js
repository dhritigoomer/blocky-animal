// Crediting Professor James Davis for functionality in the file
// Global Variables
let canvas;
let gl;
let a_Position;
let u_FragColor;
let u_Size;
let u_ModelMatrix = 0;
let u_GlobalRotateMatrix = 0;


const POINT = 0;
const TRIANGLE = 1;
const CIRCLE = 2;

let g_globalAngle = 0;
let g_globalAngleX = 0;
let g_globalAngleY = 0;
let g_globalAngleZ = 0;
let g_yellowAngle = 0;
var g_shapesList = [];

let g_selectedColor = [1.0, 1.0, 1.0, 1.0];
let g_selectedSize = 5.0;
let g_selectedType = POINT;
let g_selectedSegments = 10;

let gAnimalGlobalRotation = 0;
// let g_globalXAngle = 0;
// let g_globalYAngle = 0;
// let g_globalZAngle = 0;
let g_origin = [0, 0];


var g_walkAnimation = false;
var g_idleAnimation = false;
var g_AnimationSpeed = 1;

var FrontLeftLegXAngle = 0;
var FrontLeftLegYAngle = 0;
var FrontLeftLegZAngle = 0;

var FrontRightLegXAngle = 0;
var FrontRightLegYAngle = 0;
var FrontRightLegZAngle = 0;

var BackLeftLegXAngle = 0;
var BackLeftLegYAngle = 0;
var BackLeftLegZAngle = 0;

var BackRightLegXAngle = 0;
var BackRightLegYAngle = 0;
var BackRightLegZAngle = 0;

var BottomFrontLeftLegXAngle = 0;
var BottomFrontLeftLegYAngle = 0;
var BottomFrontLeftLegZAngle = 0;

var BottomFrontRightLegXAngle = 0;
var BottomFrontRightLegYAngle = 0;
var BottomFrontRightLegZAngle = 0;

var BottomBackLeftLegXAngle = 0;
var BottomBackLeftLegYAngle = 0;
var BottomBackLeftLegZAngle = 0;

var BottomBackRightLegXAngle = 0;
var BottomBackRightLegYAngle = 0;
var BottomBackRightLegZAngle = 0;

var HeadXAngle = 0;
var HeadYAngle = 0;
var HeadZAngle = 0;

var g_startTime = performance.now()/1000.0;
var g_seconds = performance.now()/1000.0 - g_startTime;




// Vertex shader program
var VSHADER_SOURCE = `
attribute vec4 a_Position;
uniform mat4 u_ModelMatrix;
uniform mat4 u_GlobalRotateMatrix;
  void main() {
    gl_Position = u_GlobalRotateMatrix * u_ModelMatrix * a_Position;
  }`

// Fragment shader program
var FSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }`


function setupWebGL() {
    // Retrieve <canvas> element
    canvas = document.getElementById('webgl');

    // Get the rendering context for WebGL
    gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    gl.enable(gl.DEPTH_TEST);
}

function connectVariablesToGLSL() {
    // Initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to intialize shaders.');
        return;
    }

    // Get the storage location of a_Position
    a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position');
        return;
    }

    // Get the storage location of u_FragColor
    u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    if (!u_FragColor) {
        console.log('Failed to get the storage location of u_FragColor');
        return;
    }

    // Get the storage location of u_ModelMatrix
    u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
    if (!u_ModelMatrix) {
        console.log('Failed to get the storage location of u_ModelMatrix');
        return;
    }

    u_GlobalRotateMatrix = gl.getUniformLocation(gl.program, 'u_GlobalRotateMatrix');
    if (!u_GlobalRotateMatrix) {
        console.log('Failed to get the storage location of u_GlobalRotateMatrix');
        return;
    }

    // Set an initial value for this matrix to identify
    var identityM = new Matrix4();
    gl.uniformMatrix4fv(u_ModelMatrix, false, identityM.elements);

}

// function addActionsForHtmlUI(){
//   // slider events!
//   document.getElementById('angleSlide').addEventListener(`mousemove`, function() {g_globalAngle = this.value; renderAllShapes(); });
//   document.getElementById('yellowSlide').addEventListener(`mousemove`, function() {g_yellowAngle = this.value; renderAllShapes(); });
//
//   //set clear button
//   // document.getElementById('clear-button').onclick = function () { g_shapesList = []; gl.clearColor(0.0, 0.0, 0.0, 1.0); renderAllShapes(); };
// }
// Set up actions for the HTML UI elements
function addActionsForHtmlUI(){
    document.getElementById('animationOnButton').onclick = function() {g_walkAnimation = true;};
    document.getElementById('animationOffButton').onclick = function() {g_walkAnimation = false;};
    document.getElementById('speedSlide').addEventListener('input', function() {g_AnimationSpeed = this.value; renderAllShapes(); });

    document.getElementById('xAngleSlide').addEventListener('input', function() {g_globalAngleX = this.value; renderAllShapes(); });
    document.getElementById('yAngleSlide').addEventListener('input', function() {g_globalAngleY = this.value; renderAllShapes(); });
    document.getElementById('zAngleSlide').addEventListener('input', function() {g_globalAngleZ = this.value; renderAllShapes(); });

    document.getElementById('resetCamButton').onclick = function() {resetCam();};
    document.getElementById('resetButton').onclick = function() {resetAll();};

    document.getElementById('FrontLeftLegXSlide').addEventListener('input', function() {FrontLeftLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('FrontLeftLegYSlide').addEventListener('input', function() {FrontLeftLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('FrontLeftLegZSlide').addEventListener('input', function() {FrontLeftLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('FrontRightLegXSlide').addEventListener('input', function() {FrontRightLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('FrontRightLegYSlide').addEventListener('input', function() {FrontRightLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('FrontRightLegZSlide').addEventListener('input', function() {FrontRightLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('BackLeftLegXSlide').addEventListener('input', function() {BackLeftLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('BackLeftLegYSlide').addEventListener('input', function() {BackLeftLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('BackLeftLegZSlide').addEventListener('input', function() {BackLeftLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('BackRightLegXSlide').addEventListener('input', function() {BackRightLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('BackRightLegYSlide').addEventListener('input', function() {BackRightLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('BackRightLegZSlide').addEventListener('input', function() {BackRightLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('BottomFrontLeftLegXSlide').addEventListener('input', function() {BottomFrontLeftLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomFrontLeftLegYSlide').addEventListener('input', function() {BottomFrontLeftLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomFrontLeftLegZSlide').addEventListener('input', function() {BottomFrontLeftLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('BottomFrontRightLegXSlide').addEventListener('input', function() {BottomFrontRightLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomFrontRightLegYSlide').addEventListener('input', function() {BottomFrontRightLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomFrontRightLegZSlide').addEventListener('input', function() {BottomFrontRightLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('BottomBackLeftLegXSlide').addEventListener('input', function() {BottomBackLeftLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomBackLeftLegYSlide').addEventListener('input', function() {BottomBackLeftLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomBackLeftLegZSlide').addEventListener('input', function() {BottomBackLeftLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('BottomBackRightLegXSlide').addEventListener('input', function() {BottomBackRightLegXAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomBackRightLegYSlide').addEventListener('input', function() {BottomBackRightLegYAngle = this.value; renderAllShapes(); });
    document.getElementById('BottomBackRightLegZSlide').addEventListener('input', function() {BottomBackRightLegZAngle = this.value; renderAllShapes(); });

    document.getElementById('HeadXSlide').addEventListener('input', function() {HeadXAngle = this.value; renderAllShapes(); });
    document.getElementById('HeadYSlide').addEventListener('input', function() {HeadYAngle = this.value; renderAllShapes(); });
    document.getElementById('HeadZSlide').addEventListener('input', function() {HeadZAngle = this.value; renderAllShapes(); });

}


function click(ev) {
    let coordinates = convertCoordinatesEventToGL(ev);
    g_globalAngleX = g_globalAngleX-coordinates[0]*360;
    g_globalAngleY = g_globalAngleY-coordinates[1]*360;

    renderAllShapes();
}

// function convertCoordinatesEventToGL(ev) {
//   var x = ev.clientX; // x coordinate of a mouse pointer
//   var y = ev.clientY; // y coordinate of a mouse pointer
//   var rect = ev.target.getBoundingClientRect();
//
//   x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
//   y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);
//
//   return([x,y]);
// }
function convertCoordinatesEventToGL(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    let temp = [x, y];

    x = (x - g_origin[0])/400;
    y = (y - g_origin[1])/400;

    g_origin = temp;
    return([x, y]);
}


function renderAllShapes() {
  var startTime = performance.now();

  var globalRotMat = new Matrix4();
  globalRotMat.rotate(g_globalAngleX, 0, 1, 0);
  globalRotMat.rotate(g_globalAngleY, 1, 0, 0);
  globalRotMat.rotate(g_globalAngleZ, 0, 0, 1);

  // console.log(g_globalAngle);
  gl.uniformMatrix4fv(u_GlobalRotateMatrix, false, globalRotMat.elements);
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.clear(gl.COLOR_BUFFER_BIT);

  drawAnimal();

  var body = new Cube();
  body.color = [1,0,0,1];
  body.matrix.translate(-0.25, -0.75, 0.0);
  body.matrix.rotate(-5, 1, 0, 0);
  body.matrix.scale(0.5, 0.3, 0.5);
  // body.render();
  //
  var leftArm = new Cube();
  leftArm.color = [1.0, 1.0, 0, 1];
  leftArm.matrix.setTranslate(0, -0.5, 0);
  leftArm.matrix.rotate(-5, 1, 0, 0);
  leftArm.matrix.rotate(g_yellowAngle, 0, 0, 1);
  leftArm.matrix.scale(0.25, 0.7, 0.5);
  leftArm.matrix.translate(-0.5, 0, 0);
  // leftArm.render();
  //
  var box = new Cube();
  box.color = [1, 0, 1, 1];
  box.matrix.translate(-0.1, 0.1, .0, 0);
  box.matrix.rotate(-30, 1, 0, 0);
  box.matrix.scale(.20, 0.4, 0.2);
  // box.render();

  var duration = performance.now() - startTime;
  sendTextToHTML(" ms: " + Math.floor(duration) + " fps: " + Math.floor(1000/duration), "numdot");


}

function sendTextToHTML(text, htmlID) {
  var htmlElm = document.getElementById(htmlID);
  if (!htmlElm) {
    console.log("Failed to get " + htmlID + " from html");
    return;
  }
  htmlElm.innerHTML = text;
}

function main() {
  setupWebGL();
  connectVariablesToGLSL();
  addActionsForHtmlUI();


  canvas.onclick = function(ev) {if(ev.shiftKey) {if (g_idleAnimation){g_idleAnimation = false;} else{g_idleAnimation = true;}}}
  canvas.onmousedown = origin;
  canvas.onmousemove = function(ev) { if(ev.buttons == 1) {click(ev) } };

  // Specify the color for clearing <canvas>
  gl.clearColor(171/255, 219/255, 227/255, 1.0);


  requestAnimationFrame(tick);

  // Specify the color for clearing <canvas>
  gl.clearColor(0.67, 0.82, 0.11, 1);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);


  // renderAllShapes();

}

// Called by browser repeatedly whenever its time
function tick() {
    // Print some dubug information so we know we are running
    g_seconds = performance.now()/1000.0 - g_startTime;
    // console.log(performance.now());

    // Update Animation Angles
    updateAnimationAngles();

    // Draw everything
    renderAllShapes();

    // tell the browser to update again when it has time
    requestAnimationFrame(tick);
}

function origin(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    g_origin = [x, y];
}


function updateAnimationAngles() {
    if(g_walkAnimation){
        FrontLeftLegXAngle = 10*Math.sin(g_seconds*g_AnimationSpeed);
        FrontRightLegXAngle = 10*Math.sin(g_seconds*g_AnimationSpeed);
        BackLeftLegXAngle = 10*Math.sin(g_seconds*g_AnimationSpeed);
        BackRightLegXAngle = 10*Math.sin(g_seconds*g_AnimationSpeed);
    }

    if(g_idleAnimation) {
        HeadXAngle = 10*Math.sin(g_seconds*g_AnimationSpeed);
    }
}
