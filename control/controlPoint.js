import modal from "../modal/modal.js"

import { colissionTest, checkCollision } from "../modal/colission.js";

const mod = modal()

let x = Math.floor(Math.random() * (640 + 1));
let y = Math.floor(Math.random() * (480 + 1));
let direction = Math.floor(Math.random() * 8)

let px = 0
let py = 0
let vel = 1

let cont = 0

export const point = {
    x: 10,
    y: 10,
    width: 50,
    height: 50
};





function controlPoint(obj){

    function render(){
        //direcionar movimento do objeto
        if(direction == 0){
            px = 1
        }else if(direction == 1){
            px = -1
        }else if(direction == 2){
            py = 1
        }else if(direction == 3){
            py = -1
        }else if(direction == 4){
            py = 1
            px = 1
        }else if(direction == 5){
            py = 1
            px = -1
        }else if(direction == 6){
            py = -1
            px = 1
        }else if(direction == 7){
            py = -1
            px = -1
        }
       
        const newPosition = mod.move(x, y);
        x = newPosition.x;
        y = newPosition.y;

        x += px * vel
        y += py * vel

        //atualizar posição do ponto
        point.x = x
        point.y = y

        obj.style.left = x + 'px'
        obj.style.top = y + 'px'

        checkCollision();
        if (colissionTest.collision) {
            console.log('Colisão no point');
            x = Math.floor(Math.random() * (640 + 1));
            y = Math.floor(Math.random() * (480 + 1));
            direction = Math.floor(Math.random() * 8)
            vel += 0.1
            cont++
            document.getElementById('cont').innerText = cont
        }
     
        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

export default controlPoint


