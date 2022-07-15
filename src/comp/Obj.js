import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber"
import { Group } from "three";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';



export default function Obj() {

	const obj = useLoader(OBJLoader, '/demo.obj');
	console.log("##", obj)

	return <>
		{
			obj?.children?.map(i => {
				console.log("##", i.position)
				return <group>
					<mesh 
					onPointerOver={e=>{
						console.log(e)
					}}	
					castShadow receiveShadow >
						<Html>
							<span>test</span>
						</Html>
						<primitive object={i} />
						<meshLambertMaterial color={"gray"} />
					</mesh>
				</group>
			})
		}
	</>
}