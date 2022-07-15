import React, { useEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeDemo() {

	const ref = useRef(null)
	const [load, setLoad] = useState(false)

	useEffect(() => {
		if (ref.current && !load) {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
			const renderer = new THREE.WebGL1Renderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			ref.current.appendChild(renderer.domElement);


			//设置照相机位置
			camera.position.z = 7;
			camera.position.y = 2;
			// controls.update();


			const controls = new OrbitControls(camera, renderer.domElement);
			// 创建正方形
			const geometry = new THREE.BoxGeometry(1, 1, 1);
			const material = new THREE.MeshBasicMaterial({ color: "gray" })
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);


			//渲染场景
			renderer.render(scene, camera)
			setLoad(true)
		}
	}, [ref.current])

	return <div ref={ref}>

	</div>
}