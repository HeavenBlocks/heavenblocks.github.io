import { keys } from "./input.js";
import { platforms } from "../entities/platform.js";
import { isColliding } from "./collision.js";

export function updatePlayer(player, state) {
    const gravity = -0.02;
    const jumpPower = 0.35;
    const speed = 0.1;

    // Movement
    if (keys.KeyA || keys.ArrowLeft) player.position.x -= speed;
    if (keys.KeyD || keys.ArrowRight) player.position.x += speed;
    if (keys.KeyW || keys.ArrowUp) player.position.z -= speed;
    if (keys.KeyS || keys.ArrowDown) player.position.z += speed;

    // Gravity
    state.velocityY += gravity;
    player.position.y += state.velocityY;
    state.onGround = false;

    // Platform collisions
    for (const p of platforms) {
        if (isColliding(player, p) && state.velocityY <= 0) {
            player.position.y = p.position.y + 1;
            state.velocityY = 0;
            state.onGround = true;
        }
    }

    // Jump
    if (keys.Space && state.onGround) {
        state.velocityY = jumpPower;
        state.onGround = false;
    }
}
