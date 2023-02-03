// import everything from the three.js package.
import * as THREE from "three";

const ThreeComponent = () => {
  // run function to make ghost look at mouse on mousemove
  window.addEventListener("mousemove", onDocumentMouseMove, false);

  // create a scene in THREE.js and set the background color to app background color
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e0e0e);

  // create a perspective camera with a field of view of 50,
  // aspect ratio of window inner width/height, and near and
  // far clipping planes at 0.1 and 1000
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // set the camera's initial position along the y-axis to 10
  camera.position.y = 10;

  // create a renderer with antialiasing enabled and set its size to the window's inner width and height
  // antialias true to give smoother edges
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // append the renderer's DOM element to the body of the document (canvas)
  document.body.appendChild(renderer.domElement);

  // add an event listener to the window to handle resizing
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // also resize variables declared for mouse/ghost movement
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    // update the camera's projection matrix
    camera.updateProjectionMatrix();
  });
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

  // new light to shine on ghost, white, 3 intensity and 100 distance
  var light = new THREE.PointLight(0xffffff, 3, 100);
  light.position.set(50, 50, 50);
  scene.add(light);

  camera.position.z = 50;

  // create mouse vector and set position to 0 by default
  let target = new THREE.Vector3();
  let mouseX = 50,
    mouseY = 50;
  // define center point of screen
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2 + 100;

  // finds mouse position on move
  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }
  // function to animate the scene using requestAnimationFrame API
  function animate() {
    requestAnimationFrame(animate);
    // update the target x and y position based on mouse position
    target.x += (mouseX - target.x) * 0.3;
    target.y += (-mouseY - target.y) * 0.3;
    // keep the target z position to be the same as camera position z
    target.z = camera.position.z;
    // make the ghostGroup look at the updated target position
    ghostGroup.lookAt(target);
    // render the scene with updated camera position and ghost group
    renderer.render(scene, camera);
  }
  // start the animation
  animate();
};

export default ThreeComponent;
