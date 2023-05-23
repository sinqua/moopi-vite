import React,{ useRef, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


import Layout from "../components/layout/layout";

import * as THREE from 'three'
import MainCanvas from "../components/threejs/mainCanvas";

export default function ThreeJsPage() {
    
    return (
        <div className="h-full">
            <MainCanvas />
        </div>
    );
}