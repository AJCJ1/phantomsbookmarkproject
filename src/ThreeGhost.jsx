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

  scene.add(ghost)

  camera.position.z = 50;

  // const cube = new THREE.Mesh( geometry, material );
  // scene.add(cube);

  // camera.position.z = 5;

  // new light to shine on ghost, white, 3 intensity and 100 distance
  var light = new THREE.PointLight(0xffffff, 3, 100);
  light.position.set(50, 50, 50);
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
