import './style.css'
import * as THREE from 'three';

document.querySelector('#app').innerHTML = `
  <h1>Hello three js!</h1>
  <h2>Part 1</h2>
  `
//scene
const scene = new THREE.Scene();

//object------------------------------------------
// const geometry = new THREE.BoxGeometry(1, 1, 1);

//material
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//final object (mesh)
// const mesh = new THREE.Mesh(geometry, material);
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
//scene.add(mesh);

//groups----------------------------------------
const group = new THREE.Group()

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0xff0000})
)
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 'blue'})
)
cube2.position.set(1.5,.3,1)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 'green'})
)
cube3.position.set(.8,1.2,-1.6)

group.add(cube1, cube2, cube3)

scene.add(group)

group.rotateZ(0.2)

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

camera.lookAt(group.position)

//renderer to draw into canvas api
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)