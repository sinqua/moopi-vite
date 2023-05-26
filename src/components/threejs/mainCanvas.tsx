import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Canvas, PerspectiveCameraProps, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Stats, OrbitControls, Circle, CameraControls, OrbitControlsProps, useGLTF, useFBX } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { Color } from "three/src/math/Color.js";


import {AnimationMixer, Vector3, Box3, BoxGeometry} from 'three';

import ResetBtn from '../../assets/images/resetBtn.png';
import HelpBtn from '../../assets/images/helpBtn.png';
import VRBtn from '../../assets/images/vrBtn.png';
import FullScreenBtn from '../../assets/images/fullscreenBtn.png';



const Model = (props: any) => {
    const fileType = props.path.includes("fbx") ? "fbx" : "gtlf";

    console.log("파일 이름 : " + props.path);
    console.log("파일 타입 : " + fileType);

    const model = useLoader(
        fileType === "fbx" ?  FBXLoader : GLTFLoader,
        props.path
    );

    const animation = useLoader(
        FBXLoader,
        '../src/assets/models/Walking.fbx'
    )

    console.log(model);
    console.log("animation", animation);

    const Box = new Box3().setFromObject( fileType === "fbx" ? model : model.scene ); 
    const Size = Box.getSize(new Vector3());
    console.log(Size);

    // const beforeBox = new Box3().setFromObject( fileType === "fbx" ? model : model.scene ); 
    // const beforeSize = beforeBox.getSize(new Vector3());

    // console.log("beforeSize", beforeSize);

    // (fileType === "fbx" ? model : model.scene).scale.setScalar(0.01);

    // (fileType === "fbx" ? model : model.scene).scale.setScalar(1.0 / Size.z);
    // (fileType === "fbx" ? model : model.scene).scale.multiplyScalar(1.0 / Size.y);

    // const afterBox = new Box3().setFromObject( fileType === "fbx" ? model : model.scene ); 
    // const afterSize = afterBox.getSize(new Vector3());

    // console.log("afterSize", afterSize);



    // Here's the animation part
    // ************************* 
    // let mixer: AnimationMixer;
    // if (model.animations.length) {
    //     mixer = new AnimationMixer(model);
    //     model.animations.forEach((clip: any) => {

    //         // console.log("clip", clip);
    //         const action = mixer.clipAction(clip)
    //         action.play();
    //     });
    // }

    // let mixer = new AnimationMixer(model);

    // const action = mixer.clipAction(animation.animations[0])

    // console.log(action);

    // action.play();


    // // model.animations.forEach((clip: any) => {

    // //     // console.log("clip", clip);
    // //     const action = mixer.clipAction(clip)
    // //     action.play();
    // // });

    // useFrame((state, delta) => {

    //     mixer?.update(delta)

    // })
    // *************************

    // model.scene.traverse((child: any) => {
    //     if (child.isMesh) {
    //         child.castShadow = true
    //         child.receiveShadow = true
    //         child.material.side = FrontSide
    //     }
    // })

    // model.scene.rotation.y = 90;


    return (
        <>
            <primitive 
                object={fileType === "fbx" ? model : model.scene} // gltf, vrm
                // object={model} // fbx
                // scale={model.scale}
                // position={[0, 0, 0]}
                children-0-castShadow
            />
        </>
    )
}


export default function MainCanvas() {
    const [fullscreen, setFullscreen] = useState(false);
    const [ modelUrl, setModelUrl ] = useState("");

    const fullscreenClass = "absolute w-full h-full top-0 left-0";
    const defaultClass = "relative w-full h-full top-0 left-0";

    const PresignedUrl = async (bucket: string, key: string) => {
        let result = "";
        
        await axios.post(`https://moopi.offing.me/api/model`,{
            bucket: bucket,
            key: key
        })
        .then((res) => {
            result =  res.data;
        })
    
        setModelUrl(result);
    }

    const gradientShader = {
        uniforms: {
          color1: { value: new Color('#B2B2B2') }, // Start color
          color2: { value: new Color('#FAF9F6') }, // End color
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            void main() {
                vec2 center = vec2(0.5, 0.5);
                float dist = distance(vUv, center);
                float alpha = 1.23 - dist; // Calculate alpha value based on distance
                gl_FragColor = vec4(mix(color1, color2, dist), alpha);
              }
        `,
    };

    const cameraControlsRef = useRef<CameraControls>(null);


    const resetCamera = () => {
        cameraControlsRef.current?.reset(true);
    };

    const postMessage = () => {
        // window.parent.postMessage('fullScreen', '*'); // 메시지 전송
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }

    useEffect(() => {
        PresignedUrl("moopi-model-bucket", "model/choyang2_DevilHood.vrm");
    }, []);

    return (
        <div id="temptemp" className={fullscreen ? fullscreenClass : defaultClass}>
            <Canvas camera={{ position: [0.5, 1, 2]}} style={{backgroundColor: '#FAF9F6'}} shadows  >
                <group position-y={-0.8}>
                    <CameraControls
                        ref={cameraControlsRef}
                        // minDistance={1}
                        maxDistance={5}
                        // enabled={enabled}
                        // verticalDragToForward={verticalDragToForward}
                        // dollyToCursor={dollyToCursor}
                        // infinityDolly={infinityDolly}
                    />

                    <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
                    {/* <primitive
                        object={gltf.scene}
                        position={[0, 0, 0]}
                        children-0-castShadow
                    /> */}
                    
                    {/* <Model path={"../src/assets/models/zxcv.fbx"} /> */}
                    {/* <Model path={'https://moopi-model-bucket.s3.ap-northeast-2.amazonaws.com/model/Girl.fbx'} /> */}
                    <Model path={modelUrl} />
                    <Circle args={[0.5]} rotation-x={-Math.PI / 2} receiveShadow renderOrder={2}>
                        {/* <meshStandardMaterial color={new Color('#eeeeee')} /> */}
                        <shaderMaterial attach="material" args={[gradientShader]} />
                    </Circle>
                    <axesHelper />
                </group>
                {/* <OrbitControls target={[0, 1, 0]} /> */}
            </Canvas>
            <div className="absolute flex flex-row bottom-0 right-0 space-x-[20px] p-[20px]">
                <img className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] cursor-pointer" src={ResetBtn} onClick={resetCamera}/>
                <img className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] cursor-pointer" src={HelpBtn}/>
                <img className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] cursor-pointer" src={VRBtn}/>
                <img className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] cursor-pointer" src={FullScreenBtn} onClick={postMessage}/>
            </div>
        </div>
    );
}