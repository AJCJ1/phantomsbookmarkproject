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
  const cube = new THREE.Mesh( geometry, material );
  scene.add(cube);

  camera.position.z = 5;

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
