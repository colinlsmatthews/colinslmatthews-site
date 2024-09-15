import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Scene(props) {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
    const rendererRef = useRef(new THREE.WebGLRenderer());
    const controlsRef = useRef(null);
    const geometryRef = useRef(null);
    const materialRef = useRef(new THREE.MeshLambertMaterial({ color: 0xff0000 }));
    const meshRef = useRef(null);

    useEffect(() => {
        const scene = sceneRef.current;
        const camera = cameraRef.current;
        const renderer = rendererRef.current;
        const material = materialRef.current;

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        camera.position.z = 5;

        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;

        const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        scene.add(light);

        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        function randomRotationFactor(bound1, bound2) {
            return (Math.random() * (bound2 - bound1)) + bound1;
        }

        function animate() {
            if (meshRef.current) {
                meshRef.current.rotation.x += randomRotationFactor(0.002, 0.02);
                meshRef.current.rotation.y += randomRotationFactor(0.001, 0.01);
                meshRef.current.rotation.z += randomRotationFactor(0.001, 0.005);
            }

            controls.update();
            renderer.render(scene, camera);
        }

        renderer.setAnimationLoop(animate);

        return () => {
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        if (meshRef.current) {
            sceneRef.current.remove(meshRef.current);
        }

        let geometry;
        const box = new THREE.BoxGeometry(1, 1, 1);
        const sphere = new THREE.SphereGeometry(1, 32, 32);
        const cone = new THREE.ConeGeometry(1, 1, 32);
        const cylinder = new THREE.CylinderGeometry(1, 1, 1, 32);
        const torus = new THREE.TorusGeometry(1, 0.4, 16, 100);
        if (props.shape === 'box') {
            geometry = box;
        } else if (props.shape === 'sphere') {
            geometry = sphere;
        } else if (props.shape === 'cone') {
            geometry = cone;
        } else if (props.shape === 'cylinder') {
            geometry = cylinder;
        } else if (props.shape === 'torus') {
            geometry = torus;
        } else {
            geometry = box;
        }

        geometryRef.current = geometry;
        const mesh = new THREE.Mesh(geometry, materialRef.current);
        sceneRef.current.add(mesh);
        meshRef.current = mesh;
    }, [props.shape]);

    return (
        <div ref={mountRef}></div>
    );
}

export default Scene;
