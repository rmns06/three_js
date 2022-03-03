import './style.css'
import * as THREE from 'three';
import gsap from 'gsap';


document.querySelector('#app').innerHTML = `
  <h1>Hello three js!</h1>
  <h2>Part 1</h2>
  `
//scene
const scene = new THREE.Scene();

//object------------------------------------------
const geometry = new THREE.BoxGeometry(1, 1, 1);

//material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

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

const sizes ={
  width: 800,
  height: 600
}
//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;

scene.add(camera);

// camera.lookAt(group.position)

//renderer to draw into canvas api
const canvas = document.querySelector('.webgl')
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

mesh.position.x = Math.cos(elapsedTime)
// camera.lookAt(mesh.position)

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