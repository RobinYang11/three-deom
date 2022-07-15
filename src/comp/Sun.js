import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

export default function Sun() {
	const lightRef = useRef();

	const { x, y, z ,color} = useControls({
		x: {
			value:0,
			label:"x坐标"
		},
		y: 50,
		z: 100,
		color:"#d8d0d3",
		color1:"#ff005b",
	})


	useHelper(lightRef, DirectionalLightHelper)
	return <>
		<directionalLight
			// receiveShadow
			color={color}
			castShadow={true}
			position={[x, y, z]}
			intensity={3.5}
			distance={5000}
			shadow-mapSize-width={4028}
			shadow-mapSize-height={4028}
			shadow-camera-far={4000}
			shadow-camera-left={-100}
			shadow-camera-right={100}
			shadow-camera-top={100}
			shadow-camera-bottom={-100}
			ref={lightRef}
		/>
	</>

}