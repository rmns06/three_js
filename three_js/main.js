import './style.css'
import * as THREE from 'three';

document.querySelector('#app').innerHTML = `
  <h1>Hello three js!</h1>
  <h2>Part 1</h2>
  `
//scene
const scene = new THREE.Scene();

//object
const geometry = new THREE.BoxGeometry(1, 1, 1);

//material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//final object (mesh)
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes ={
  width: 800,
  height: 600
}
//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

//renderer to draw into canvas api
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)