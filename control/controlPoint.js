import modal from "../modal/modal.js";
import { colissionTest, checkCollision } from "../modal/colission.js";

function controlPoint(obj, behavior) {
    const mod = modal();

    //parametros
    let x = Math.floor(Math.random() * (640 + 1));
    let y = Math.floor(Math.random() * (480 + 1));
    let direction = Math.floor(Math.random() * 10);
    let px = 0;
    let py = 0;
    let vel = 1;
    let dash = 1;

    let toChangeDirection = 3000;
    setInterval(() => {
        direction = Math.floor(Math.random() * 8);

    }, toChangeDirection);

    let dashTime = 3000;
    let durationDash = 250;
    setInterval(() => {
        let Dash = Math.floor(Math.random() * (1 + 1));

        if (Dash) {
            setTimeout(() => {
                dash = 3;

                setTimeout(() => {
                    dash = 1;
                }, durationDash);
            }, durationDash);
        }
    }, dashTime);

    function render() {
        //direcionar movimento do objeto
        const movePointTest = mod.movePoint(direction, px, px);

        px = movePointTest.px;
        py = movePointTest.py;

        const newPosition = mod.move(x, y);
        x = newPosition.x;
        y = newPosition.y;
        x += px * (vel * dash);
        y += py * (vel * dash);

        //atualizar posição do ponto
        point.x = x;
        point.y = y;

        //animar ponto
        obj.style.left = x + "px";
        obj.style.top = y + "px";

        //verificar colisão
        checkCollision();

        //verificar se pegou bolinha
        const getBallTeste = mod.getBall(colissionTest, x, y, vel, direction, toChangeDirection, behavior);
        x = getBallTeste.x;
        y = getBallTeste.y;
        vel = getBallTeste.vel;
        direction = getBallTeste.direction;
        toChangeDirection = getBallTeste.toChangeDirection;


        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
export default controlPoint;

export const point = {
    x: 10,
    y: 10,
    width: 50,
    height: 50,
};
