import './style.css'
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


document.querySelector('#app').innerHTML = `
  <h1>Hello three js!</h1>
  <h2>Part 7</h2>
  <p>Add camera controls (drag & drop) </p>
  `
const canvas = document.querySelector('.webgl')
const sizes ={
  width: 800,
  height: 600
}

/**
 * cursor
 */
const cursor = {
  x: 0,
  y:0
}
window.addEventListener('mousemove', (e) => {
 cursor.x = e.clientX / sizes.width - 0.5
 cursor.y = -(e.clientY / sizes.height - 0.5)
})
//scene
const scene = new THREE.Scene();

//object------------------------------------------
const geometry = new THREE.BoxGeometry(1, 1, 1);

//material
const material = new THREE.MeshBasicMaterial({ color: 0x66C3FF });

//final object (mesh)
const mesh = new THREE.Mesh(geometry, material);
//methods to transform object

// mesh.position.z = 0.7;
// mesh.position.y = 0.6;
// mesh.position.set(0.7, 0.6, 0);

//scale
// mesh.scale.x = 2;
// mesh.scale.y = 1;
// mesh.scale.set(2, 1, 1);

//rotation
// mesh.rotateZ(10);
// mesh.rotation.reorder('YXZ');
// mesh.rotation.y = 10;
// mesh.rotation.x = 10;
// rotate without change axes
// mesh.rotateX(Math.PI * 0.2 );
// mesh.rotateY(Math.PI * 0.1 );

//add mesh to the scene
scene.add(mesh);


//add gizmo
const axesHelper = new THREE.AxesHelper(1.5)
scene.add(axesHelper)

/** 
 *camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .1, 100);
// const aspectRatio =  sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1* aspectRatio, 1, -1)
camera.position.z = 3;
// camera.position.y = 2;
// camera.position.x = 2;

scene.add(camera);
// camera.lookAt(group.position)

/**
 * Controls camera
 */
 const controls = new OrbitControls(camera, canvas)
// change the defaut view
//  controls.target.y = 1
//  controls.update()

//add damping for smooth controls
controls.enableDamping = true


//renderer to draw into canvas api
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// renderer.render(scene, camera)

/**
 * Animate with clock
 */
const clock = new THREE.Clock()

const tick = () => {

const elapsedTime = clock.getElapsedTime()
// mesh.rotation.y =  elapsedTime

/**
 * Update Camera manually
 */
// to see the mesh
// camera.position.x = cursor.x * 2 
// camera.position.y = cursor.y * 2 

//to see the mesh and behind
// camera.position.x = Math.cos(cursor.x * Math.PI * 2) * 3 
// camera.position.z = Math.sin(cursor.x * Math.PI * 2) * 3
// camera.position.y = cursor.y*5
// camera.lookAt(mesh.position)

/**
 * Update Camera with built in fnction OrbitControls
 */
controls.update()

//Renderer
renderer.render(scene, camera)
requestAnimationFrame(tick)
}
tick()
/**
 * Animate with gsap
 */

// gsap.to(mesh.position, {duration: 3, delay: 1, x: 2})
// gsap.to(mesh.position, {duration: 3, delay: 4, x: 0})

// const tick = () => {
//   renderer.render(scene, camera)
//   requestAnimationFrame(tick)
  
// }
// tick()