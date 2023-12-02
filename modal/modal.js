function modal() {
    function move(x, y) {
        if (x < 0 - 25) x = 640; 
        if (x > 640 + 25) x = 0;
        if (y < 0 - 25) y = 480;
        if (y > 480 + 25) y = 0;

        return { x, y };
    }

    return { move };
}

export default modal