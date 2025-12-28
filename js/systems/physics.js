import { keys } from "./input.js";
import { colliders } from "../entities/world.js";
import { resolveYCollision } from "./collision.js";

export function updatePlayer(player, state) {
    const speed = 0.15;
    const gravity = -0.018;
    const jumpForce = 0.38;
    const coyoteMax = 10;

    // Move relative to facing
    if (keys.KeyA) player.position.x -= speed;
    if (keys.KeyD) player.position.x += speed;
    if (keys.KeyW) player.position.z -= speed;
    if (keys.KeyS) player.position.z += speed;

    state.velocity.y += gravity;
    player.position.y += state.velocity.y;

    let grounded = false;

    for (const c of colliders) {
        if (resolveYCollision(player, c)) {
            state.velocity.y = 0;
            grounded = true;
        }
    }

    if (grounded) {
        state.onGround = true;
        state.coyoteTime = coyoteMax;
    } else {
        state.coyoteTime--;
    }

    if (keys.Space && state.coyoteTime > 0) {
        state.velocity.y = jumpForce;
        state.coyoteTime = 0;
    }

    // Respawn
    if (player.position.y < -40) {
        player.position.set(0, 5, 0);
        state.velocity.set(0, 0, 0);
    }
}
