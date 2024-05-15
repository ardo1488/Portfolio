import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Stage, useGLTF, Resize } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import navStyles from "../styles/nav.module.css";
  
    function Model(props) { // displays 3D object of my name 
    const group = useRef();
    const { nodes, materials } = useGLTF('/nameLogo.glb')


    useFrame(state => {

        const {position} = group.current;
        position.x += (Math.sin(1000 + state.clock.elapsedTime) * Math.PI) / 1200;
        position.y += (Math.sin(1000 + state.clock.elapsedTime) * Math.PI) / 1200;
        
    });


    return (
        <group ref={group} {...props} dispose={null}>
        
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials.outerColor}
            position={[-0.232, 0.005, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text001.geometry}
            material={materials.innerColor}
            position={[-0.249, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={3}
        />
        </group>
    );
}

useGLTF.preload('/nameLogo.glb') // preload the glb file of my name logo


export default function Nav(){
    return (
        <div className={navStyles.navbar}>
            <div className={navStyles.stageDiv}>
                <Link className={navStyles.navHome} to="/"> 
                    <Canvas >
                        <Stage environment="park" contactShadowOpacity={1}>
                            <Resize  >
                                <Model />
                            </Resize>
                        </Stage>                     
                    </Canvas>
                </Link>
            </div>                   
            <div className={navStyles.ulDiv}>
                <ul>
                    <li>
                        <Link className={navStyles.Link} to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className={navStyles.Link} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={navStyles.Link} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}