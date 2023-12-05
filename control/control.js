import modal from "../modal/modal.js"

const mod = modal()

let x = 320 //metade da tela root
let y = 240
let px = 0
let py = 0
let vel = 5

export const player = {
    x: 100,
    y: 10,
    width: 50,
    height: 50
};

function control(obj){
    function scaleButton(button, scale){
        if(scale == 'up'){
            document.getElementById(button).style.scale = 1.2 
            document.getElementById(button).style.backgroundColor = 'white'
            document.getElementById(button).style.color = 'black'
        }else{
            document.getElementById(button).style.scale = 1
            document.getElementById(button).style.backgroundColor = 'rgb(18, 18, 18)'
            document.getElementById(button).style.color = 'white'

        }
        
    }

    document.addEventListener('keydown', (e)=>{
        if(e.keyCode == 65){ //left
            px = -1
            scaleButton('A', 'up')
        }
        if(e.keyCode == 68){ //right
            px = 1
            scaleButton('D', 'up')
        }
        if(e.keyCode == 83){ //down
            py = 1
            scaleButton('S', 'up')
        }
        if(e.keyCode == 87){ //up
            py = -1
            scaleButton('W', 'up')
        }
    })
    document.addEventListener('keyup', (e)=>{
        if(e.keyCode == 65){ //left
            px = 0
            scaleButton('A')
        }
        if(e.keyCode == 68){ //right
            px = 0
            scaleButton('D')
        }
        if(e.keyCode == 83){ //down
            py = 0
            scaleButton('S')
        }
        if(e.keyCode == 87){ //up
            py = 0
            scaleButton('W')
        }
    })
    
    function render(){
        const newPosition = mod.move(x, y);
        
        x = newPosition.x;
        y = newPosition.y;
        x += px * vel
        y += py * vel

        //atualizar posição do jogador
        player.x = x
        player.y = y

        obj.style.top = y + 'px'
        obj.style.left = x + 'px'
        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}
export default control

