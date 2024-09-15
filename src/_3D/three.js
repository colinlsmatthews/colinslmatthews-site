import * as THREE from 'three';

window.THREE = THREE;

require('three/examples/jsm/controls/OrbitControls');


export default {
    ...THREE,
    OrbitControls: window.THREE.OrbitControls
};
