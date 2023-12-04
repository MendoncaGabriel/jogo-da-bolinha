let cont = 0
import object from '../object/object.js'

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
            px = 0
        }

        else if(direction == 3){
            py = 1
        }else if(direction == 4){
            py = -1
        }else if(direction == 5){
            py = 0
        }

        else if(direction == 6){
            py = 1
            px = 1
        }else if(direction == 7){
            py = 1
            px = -1
        }else if(direction == 8){
            py = -1
            px = 1
        }else if(direction == 9){
            py = -1
            px = -1
        }
        return{px, py}
    }
    function getBall(colissionTest, x, y, vel, direction, toChangeDirection, behavior){
        if (colissionTest.collision) {
      
            x = Math.floor(Math.random() * (640 + 1));
            y = Math.floor(Math.random() * (480 + 1));
            direction = Math.floor(Math.random() * 8)
            vel += 0.1
            if(toChangeDirection > 1000){toChangeDirection-=200}
            contPoint(behavior)
        }
        return{colissionTest, x, y, vel, direction, cont, toChangeDirection}
    }
    function timeChangeDirection(direction, timeChangeDirection ){

        setInterval(() => {
            direction = Math.floor(Math.random() * 8)
        }, timeChangeDirection);

        return {direction}
    }

    function contPoint(behavior){

        behavior == 'pointRed' ? cont--   : cont++

       
        const root = document.getElementById('root')
        const obj = object(root);

        if(behavior == 'pointBlue' && cont % 10 == 0){
            obj.pointRed() 
            console.log(cont)
        }
        console.log(cont)

   

       
        document.getElementById('cont').innerText = cont
    }

    return { move, movePoint, getBall, timeChangeDirection ,contPoint};
}

export default modal