const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var lerp=function(a,b,x){ return(a+x*(b-a)); };

const W = canvas.width;
const H = canvas.height;
const SEA_LEVEL  = W / 2;
const waveSpeed = 0.5;

const wavePeriod = 200;

let waveCenters = [];
let waveOdd = [];

const boatSpeed = 0.2;

let mostUpdatedIntersection = { x: 100, y: 100 };
let mostUpdatedSlope = 1;

let boatX = -25;

function drawLine(x1, y1, x2, y2){
  ctx.strokeStyle = 'rgb(139, 0, 0)';
  ctx.lineWidth = 40;
    ctx.beginPath();
    ctx.moveTo(x1, y1); 
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawCurve(x1, y1, x2, y2, cx, cy){
  ctx.beginPath();
  ctx.moveTo(x1, y1); 
  ctx.quadraticCurveTo(cx, cy, x2, y2);

  ctx.lineTo(x2, canvas.height);
  ctx.lineTo(x1, canvas.height);
  ctx.closePath(); 

  ctx.fillStyle = 'rgb(0, 0, 139)'; 
  ctx.fill(); 
  ctx.strokeStyle = 'rgb(0, 0, 139)';
  ctx.stroke();
}


function drawWaves(){
  // sea level line
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  //drawLine(0, SEA_LEVEL, W, SEA_LEVEL);

  //waves
  let halfWavePeriod = wavePeriod / 2;
  let waveHeight = 30;
  
  boatX += boatSpeed;
  if(boatX > W + 25){
    boatX = -50;
  }

  for (let i = 0; i < waveCenters.length; i++) {
    waveCenters[i] += waveSpeed;
    if(waveCenters[i] - halfWavePeriod >= W){
      waveCenters[i] = -halfWavePeriod;
    }
  }

  for (let i = 0; i < waveCenters.length; i++) {
    const item = waveCenters[i];

    const lx = item - halfWavePeriod;
    const lxe = item + halfWavePeriod;
    
    let cy = SEA_LEVEL + waveHeight;
    if(waveOdd[i] == true){
      cy = SEA_LEVEL - waveHeight;
    }

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    drawCurve(lx, SEA_LEVEL, lxe, SEA_LEVEL, item, cy);
    
    if(boatX >= -50 && boatX <= W + 50){

      if(boatX >= lx && boatX <= lxe ){
        const intersection = findIntersectionWithVerticalLine(
          lx, SEA_LEVEL, lxe, SEA_LEVEL, item, cy, boatX
        );
  
        if(intersection != null){
          mostUpdatedIntersection = intersection;

          const slope = getSlopeOnQuadraticCurve(
            mostUpdatedIntersection.x, mostUpdatedIntersection.y, 
            lx, SEA_LEVEL, 
            lxe, SEA_LEVEL, 
            item, cy 
          );

          mostUpdatedSlope = slope;
          
        }
      }
    }
    
  }

  if(boatX >= -50 && boatX <= W + 50){

      ctx.save();
      ctx.translate(mostUpdatedIntersection.x, mostUpdatedIntersection.y);
      ctx.rotate(Math.atan(mostUpdatedSlope) + 3.14);
      ctx.translate(-mostUpdatedIntersection.x, -mostUpdatedIntersection.y + 20);
      ctx.beginPath();
      ctx.arc(mostUpdatedIntersection.x, mostUpdatedIntersection.y, 50, Math.PI, 0, false);
      ctx.fillStyle = 'rgb(139, 0, 0)';
      ctx.fill();
      ctx.restore();
  
      drawPerpendicularLineAtIntersection(mostUpdatedIntersection, -mostUpdatedSlope)

  }

}

function drawParabola() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWaves();
}

function drawPerpendicularLineAtIntersection(intersection, slope) {

  const angle = Math.atan(slope);


  const perpendicularAngle = angle + Math.PI / 2; 
  const x1 = intersection.x;
  const y1 = intersection.y;
  const x2 = x1 + 100 * Math.cos(perpendicularAngle); 
  const y2 = y1 - 100 * Math.sin(perpendicularAngle); 

  drawLine(x1, y1, x2, y2);
}

function animate() {
  drawParabola();
  requestAnimationFrame(animate);
}

function init(){
    //draw waves
    let isOdd = false;
    let i = 0;
  
    while(i < W + wavePeriod){
      waveCenters.push(i);
      waveOdd.push(isOdd);

      i += wavePeriod;
      isOdd = !isOdd;
    }
  
}

function findIntersectionWithVerticalLine(x1, y1, x2, y2, cx, cy, verticalX) {
  const epsilon = 0.0001; // A small value for precision

  for (let t = 0; t <= 1; t += 0.001) {
      const x = Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * cx + Math.pow(t, 2) * x2;
      if (Math.abs(x - verticalX) < epsilon) {
          const y = Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * cy + Math.pow(t, 2) * y2;
          return { x: x, y: y };
      }
  }

  return null; // no interception foundd
}


function getSlopeOnQuadraticCurve(x, y, x1, y1, x2, y2, cx, cy) {
  const epsilon = 1e-6;
  let t = 0.5;

  while (true) {
      const xt = Math.pow(1 - t, 2) * x1 + 2 * t * (1 - t) * cx + Math.pow(t, 2) * x2;
      if (Math.abs(xt - x) < epsilon) {
          break;
      }

      const derivative_xt = 2 * (1 - t) * (cx - x1) + 2 * t * (x2 - cx);
      t -= (xt - x) / derivative_xt;
  }

  const dy_dt = 2 * (1 - t) * (cy - y1) + 2 * t * (y2 - cy);
  const dx_dt = 2 * (1 - t) * (cx - x1) + 2 * t * (x2 - cx);
  
  const slope = dy_dt / dx_dt;
  return slope;
}

init();
animate();
