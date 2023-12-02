import { player } from "../control/control.js";
import { point } from "../control/controlPoint.js";

export const colissionTest = {
    collision: false
}

export function checkCollision() {
    const collisionX = player.x < point.x + point.width && player.x + player.width > point.x;
    const collisionY = player.y < point.y + point.height && player.y + player.height > point.y;
    colissionTest.collision = collisionX && collisionY;
}
