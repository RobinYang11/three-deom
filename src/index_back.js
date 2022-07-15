
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


var scene = new THREE.Scene();
/**
 * 创建网格模型
 */
var material = new THREE.MeshLambertMaterial({ color: "red", dithering: true });
// var geometry = new THREE.BoxBufferGeometry(30, 20, 20);
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(4, 10, 0);

// // 对产生阴影的物体设置
// mesh.castShadow = true;
// scene.add(mesh);

var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
var planeGeometry = new THREE.PlaneBufferGeometry(2000, 2000);
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// planeMesh.position.set(0, 0, 0);
planeMesh.rotation.x = - Math.PI * 0.5;

// 对接收阴影的物体设置
planeMesh.receiveShadow = true;
scene.add(planeMesh);

const loader = new OBJLoader();
loader.load('demo.obj', obj => {
  console.log(obj)
  const o1 = obj.children[0]

  o1.castShadow = true;

  scene.add(o1, material)

  // var bd = new THREE.Mesh(obj, planeMaterial);
  // obj.receiveShadow = true
  // scene.add(obj)
}, () => { }, err => {
  console.log(err)
})

var directionLight = new THREE.DirectionalLight(0xffffff, 1);
directionLight.position.set(200, 200, 200);

// 对灯光设置
directionLight.castShadow = true;
//设置阴影分辨率
directionLight.shadow.mapSize.width = 2048;
directionLight.shadow.mapSize.height = 2048;

directionLight.distance = 500;
// directionLight.target = mesh;
scene.add(directionLight);


//环境光
var ambient = new THREE.AmbientLight(0xeeeeee);
scene.add(ambient);
/**
 * 相机设置
 */
var width = window.innerWidth; //窗口宽度
var height = window.innerHeight; //窗口高度
//创建相机对象
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(15, 8, - 10);
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
/**
 * 创建渲染器对象
 */
var renderer = new THREE.WebGLRenderer({ antialias: true });

// 对render设置
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色

const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
//执行渲染操作   指定场景、相机作为参数

function animate() {
  requestAnimationFrame(animate);

  renderer.shadowMap.enabled = true;
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();



// console.log(typeof OBJLoader)

// // 

// // console.log(loader)

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
// camera.position.set(10, 50, 500)
// camera.lookAt(0, 0, 0)

// const renderer = new THREE.WebGLRenderer({
//   antialias: true
// });
// renderer.setClearColor(new THREE.Color(0x000000));
// renderer.shadowMap.enabled = true;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // const geometry = new THREE.BoxGeometry(1, 1, 1);
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// // const l1 = new THREE.AmbientLight();
// // l1.intensity = 0.255;
// // scene.add(l1)

// // const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// // hemiLight.position.set(0, 20, 0);
// // scene.add(hemiLight);

// const dirLight = new THREE.DirectionalLight(0xffffff, 10);
// dirLight.color.setHSL(0.1, 1, 0.95);
// dirLight.position.set(- 1, 100, 200);
// dirLight.position.multiplyScalar(400);

// dirLight.shadow.mapSize.width = 2048;
// dirLight.shadow.mapSize.height = 2048;

// const d = 50;

// dirLight.shadow.camera.left = - d;
// dirLight.shadow.camera.right = d;
// dirLight.shadow.camera.top = d;
// dirLight.shadow.camera.bottom = - d;

// dirLight.shadow.camera.far = 10000;
// dirLight.shadow.bias = - 0.0001;

// dirLight.castShadow = true;

// scene.add(dirLight);

// const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
// scene.add(dirLightHelper);

// var planeMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
// var planeGeometry = new THREE.PlaneBufferGeometry(2000, 2000);
// var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// planeMesh.position.set(0, 0, 0);
// planeMesh.rotation.x = - Math.PI * 0.5;

// // 对接收阴影的物体设置
// planeMesh.receiveShadow = true;
// scene.add(planeMesh);

// // var planeGeometry = new THREE.PlaneGeometry(1000, 1000);
// // var planeMaterial = new THREE.MeshLambertMaterial({
// //   color: 0xffffff
// // });
// // var plane = new THREE.Mesh(planeGeometry, planeMaterial);
// // plane.rotation.set(-0.5 * Math.PI, 0, 0); // 沿着 X轴旋转-90°
// // plane.castShadow = true;
// // scene.add(plane)




// const controls = new OrbitControls(camera, renderer.domElement);

// const geometry = new THREE.BoxGeometry(30, 30, 30);
// const material = new THREE.MeshLambertMaterial({ color: "white" });
// const cube = new THREE.Mesh(geometry, material);
// cube.position.y = 15;
// // cube.receiveShadow = true;
// cube.castShadow = true;

// scene.add(cube);

// controls.update();

// camera.position.z = 5;
// function animate() {
//   requestAnimationFrame(animate);

//   renderer.shadowMap.enabled = true;
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// };

// animate();
