import control from "../control/control.js"
import controlPoint from "../control/controlPoint.js"

function object(root) {
    function point() {
        let point = document.createElement('div')
        point.id = 'point'
        controlPoint(point, 'pointBlue')
        root.appendChild (point)
    }

    function player() {
        let player = document.createElement('div')
        player.id = 'player'
        control(player)
        root.appendChild (player)
    }

    function pointRed(){
        let poinBad = document.createElement('div')
        poinBad.id = 'pointBad'
        controlPoint(poinBad, 'pointRed')
        root.appendChild (poinBad)    
    }

    return { player, point, pointRed };
}

export default object;
