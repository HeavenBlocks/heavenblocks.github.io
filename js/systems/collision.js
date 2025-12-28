export function resolveYCollision(player, platform) {
    const pBox = new THREE.Box3().setFromObject(player);
    const oBox = new THREE.Box3().setFromObject(platform);

    if (!pBox.intersectsBox(oBox)) return false;

    const penetration =
        pBox.max.y - oBox.min.y;

    if (penetration > 0 && penetration < 1) {
        player.position.y -= penetration;
        return true;
    }

    return false;
}
