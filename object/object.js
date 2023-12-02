import control from "../control/control.js"
import controlPoint from "../control/controlPoint.js"

function object(root) {
    function point() {
        let point = document.createElement('div')
        point.id = 'point'
        controlPoint(point)
        root.appendChild (point)
    }

    function player() {
        let player = document.createElement('div')
        player.id = 'player'
        control(player)
        root.appendChild (player)
    }

    return { player, point };
}

export default object;
