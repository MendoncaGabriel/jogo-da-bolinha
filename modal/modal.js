function modal() {
    function move(x, y) {
        if (x < 0 - 25) x = 640; 
        if (x > 640 + 25) x = 0;
        if (y < 0 - 25) y = 480;
        if (y > 480 + 25) y = 0;

        return { x, y };
    }
    function movePoint(direction, px, py){
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
        return{px, py}
    }
    function getBall(colissionTest, x, y, vel, direction, cont, toChangeDirection){
        if (colissionTest.collision) {
            console.log('Colisão no point');
            x = Math.floor(Math.random() * (640 + 1));
            y = Math.floor(Math.random() * (480 + 1));
            direction = Math.floor(Math.random() * 8)
            vel += 0.1
            cont++
            if(toChangeDirection > 1000){toChangeDirection-=200}

            document.getElementById('cont').innerText = cont
        }
        return{colissionTest, x, y, vel, direction, cont, toChangeDirection}
    }

    return { move, movePoint, getBall };
}

export default modal