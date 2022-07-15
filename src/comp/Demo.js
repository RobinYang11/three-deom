import { GizmoHelper, GizmoViewcube, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { useRef } from "react"
import Obj from "./Obj";
import Sun from "./Sun";


const alignment = [
	'top-left',
	'top-right',
	'bottom-right',
	'bottom-left',
	'bottom-center',
	'center-right',
	'center-left',
	'center-center',
	'top-center',
]
const controls = ['OrbitControls', 'TrackballControls']
const faces = ['Right', 'Left', 'Top', 'Bottom', 'Front', 'Back']
const gizmos = ['GizmoViewcube', 'GizmoViewport']

const args = {
	alignment: alignment[2],
	color: 'white',
	colorX: 'red',
	colorY: 'green',
	colorZ: 'blue',
	controls: controls[0],
	faces,
	gizmo: gizmos[0],
	hideNegativeAxes: false,
	hoverColor: 'lightgray',
	labelColor: 'black',
	marginX: 80,
	marginY: 80,
	opacity: 1,
	strokeColor: 'gray',
	textColor: 'black',
}

export default function Demo() {

	return <div>
		<Canvas shadows
			camera={{
				position: [-5, 2, 10], fov: 60,
				far: 1000
			}}
		>
			<Sun />
			<ambientLight intensity={.2} />
			{/* <mesh position={[0, 50, 40]} castShadow receiveShadow >
				<boxGeometry args={[30, 100, 30]} />
				<meshLambertMaterial color={"white"} />
			</mesh> */}
			{/* <mesh position={[-60, 80, 40]} castShadow receiveShadow >
				<boxGeometry args={[30, 160, 30]} />
				<meshLambertMaterial color={"white"} />
			</mesh> */}

			<mesh position={[40, 10, 0]} castShadow receiveShadow >
				<boxGeometry args={[20, 20, 20]} />
				<meshLambertMaterial color={"white"} />
			</mesh>

			<mesh receiveShadow rotation-x={-Math.PI * 0.5}>
				<planeBufferGeometry attach="geometry" args={[1000, 1000, 1]} />
				<meshStandardMaterial attach="material" transparent opacity={.7} color={"#f7f7f7"} />
			</mesh>

			<Obj />
			<OrbitControls />
		</Canvas>
	</div>
}