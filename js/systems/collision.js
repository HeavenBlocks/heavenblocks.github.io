export function isColliding(a, b) {
    return (
        Math.abs(a.position.x - b.position.x) < 3 &&
        Math.abs(a.position.y - b.position.y) < 1.5 &&
        Math.abs(a.position.z - b.position.z) < 3
    );
}
