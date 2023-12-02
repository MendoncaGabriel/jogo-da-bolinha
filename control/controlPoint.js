import modal from "../modal/modal.js"

import { colissionTest, checkCollision } from "../modal/colission.js";

const mod = modal()

let x = Math.floor(Math.random() * (640 + 1));
let y = Math.floor(Math.random() * (480 + 1));
let direction = Math.floor(Math.random() * 8)

let px = 0
let py = 0
let vel = 1
let dash = 1

let cont = 0

export const point = {
    x: 10,
    y: 10,
    width: 50,
    height: 50
};

let toChangeDirection = 3000
setInterval(() => {
    direction = Math.floor(Math.random() * 8)
}, toChangeDirection);


let dashTime = 3000
let durationDash = 250
setInterval(() => {
    let Dash = Math.floor(Math.random() * (1 + 1));
    
    if(Dash){
        setTimeout(() => {
            dash = 3

            setTimeout(() => {
                dash = 1
            }, durationDash);
        }, durationDash);
    }
}, dashTime);

function controlPoint(obj){

    function render(){
        //direcionar movimento do objeto
        const movePointTest = mod.movePoint(direction, px, px)
        px = movePointTest.px
        py = movePointTest.py
       
        const newPosition = mod.move(x, y);
        x = newPosition.x;
        y = newPosition.y;
        x += px * (vel * dash)
        y += py * (vel * dash)

        //atualizar posição do ponto
        point.x = x
        point.y = y

        obj.style.left = x + 'px'
        obj.style.top = y + 'px'

        checkCollision();

        const getBallTeste = mod.getBall(colissionTest, x, y, vel, direction, cont, toChangeDirection)
        x = getBallTeste.x
        y = getBallTeste.y
        vel = getBallTeste.vel
        direction = getBallTeste.direction
        cont = getBallTeste.cont
        toChangeDirection = getBallTeste.toChangeDirection
        
     
        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}
export default controlPoint


