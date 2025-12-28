import { scene } from "./core/scene.js";
import { renderer } from "./core/renderer.js";
import { camera } from "./core/camera.js";
import "./core/lights.js";

import { player, playerState } from "./entities/player.js";
import "./entities/platform.js";

import { updatePlayer } from "./systems/physics.js";

function animate() {
    requestAnimationFrame(animate);

    updatePlayer(player, playerState);

    camera.position.set(
        player.position.x,
        player.position.y + 4,
        player.position.z + 6
    );
    camera.lookAt(player.position);

    renderer.render(scene, camera);
}

animate();
