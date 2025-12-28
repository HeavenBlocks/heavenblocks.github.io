import { scene } from "./scene.js";

const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(10, 20, 10);
scene.add(sun);

scene.add(new THREE.AmbientLight(0xffffff, 0.4));
