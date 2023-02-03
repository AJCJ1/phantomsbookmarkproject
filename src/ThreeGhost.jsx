// import everything from Three.js npm package
import * as THREE from "three";

const ThreeGhost = () => {

  // add an event listener to the window to handle resizing
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // update the camera's projection matrix
    camera.updateProjectionMatrix();
  });


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// antialias allows edge smoothing, makes graphics look cleaner
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // create a material for the ghost, that computes light at every pixel
  const material = new THREE.MeshPhongMaterial({
    color: 0x00fdc7,
    transparent: false,
    opacity: 8,
  });

  // Define the ghost shape
  // Define the rounded rectangle shape
  var ghostShape = new THREE.Shape();
  var x = -5,
    y = -5,
    width = 10,
    height = 17,
    radius = 5;
  ghostShape.moveTo(x, y + radius); // start at bottom left corner of rect
  ghostShape.lineTo(x, y + height - radius); // straight edge going up (make line the height - the radius)
  ghostShape.quadraticCurveTo(x, y + height, x + radius, y + height); // go up to full height with curve
  ghostShape.lineTo(x + width - radius, y + height); // makes top line of rect (not visible because of radius)
  ghostShape.quadraticCurveTo(
    x + width,
    y + height,
    x + width,
    y + height - radius
  ); // curve to right edge
  ghostShape.lineTo(x + width, y + radius); // line to bottom right of rect
  // creates jagged edges, zig zag lines going up and down
  ghostShape.lineTo(x + width / 2 + width / 3, 2);
  ghostShape.lineTo(x + width / 1.5, height - height);
  ghostShape.lineTo(x + width / 2, 2);
  ghostShape.lineTo(x + width / 3, height - height);
  ghostShape.lineTo(x + width / 6, 2);


  // Extrude the ghost shape to create a 3D object, with depth 3 and no bevel
  var extrudeSettings = {
    steps: 1,
    depth: 3,
    // would otherwise default to true
    bevelEnabled: false
  };
  // calls function to extrude shape
  var ghostGeometry = new THREE.ExtrudeGeometry(ghostShape, extrudeSettings);
  var ghost = new THREE.Mesh(ghostGeometry, material);

  // make the eyes
  var eyeGeometry = new THREE.SphereGeometry(1.8, 32, 32);
  var irisGeometry = new THREE.SphereGeometry(1, 32, 32);
  var eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xf4f4f4 });
  var irisMaterial = new THREE.MeshBasicMaterial({ color: 0x0951c6 });

   // makes the blue iris mesh
   var irisLeft = new THREE.Mesh(irisGeometry, irisMaterial);
   irisLeft.position.set(x + 3.2, y + 11.9, 2.5);
   var irisRight = new THREE.Mesh(irisGeometry, irisMaterial);
   irisRight.position.set(x + 7.2, y + 11.9, 2.5);
   // makes whites of the eyes mesh
   var leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
   leftEye.position.set(x + 3, y + 12, 1.6);
   var rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
   rightEye.position.set(x + 7, y + 12, 1.6);

   // define final group and put meshes together
   var ghostGroup = new THREE.Group();
   ghostGroup.add(ghost);
   ghostGroup.add(leftEye);
   ghostGroup.add(rightEye);
   ghostGroup.add(irisRight);
   ghostGroup.add(irisLeft);
   // add group to the canvas scene
   scene.add(ghostGroup);


  // add group to the canvas scene
  scene.add(ghostGroup);

  camera.position.z = 40;

  // new light to shine on ghost, white, 3 intensity and 100 distance
  var light = new THREE.PointLight(0xffffff, 3, 100);
  light.position.set(45, 50, 50);
  scene.add(light);


  // function to animate the scene using requestAnimationFrame API
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  // start the animation
  animate();
}

export default ThreeGhost
