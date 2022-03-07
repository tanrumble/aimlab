let gameOn = false

document.addEventListener("mousemove",(e)=> {
    const {movementX, movementY} = e
    if (gameOn == true) {
        cameraMove(movementX,movementY)
    }
})
body.keyup(el=>{
    if (el.key == 'Escape') {
        gameOn = false
    }
})

canvas.click(el=>{
    gameOn = true
    canvas[0].requestPointerLock = canvas[0].requestPointerLock || canvas[0].mozRequestPointerLock;

    canvas[0].requestPointerLock()
})

function cameraMove(x,y) {
    scene.forEach(el=>{
        if (el.Name == 'target') {
            el.X -= x * sensitivity
            el.Y -= y * sensitivity
            pixelX += x
            pixelY += y
            cursorPositionX.push(pixelX)
            cursorPositionY.push(pixelY)
            //calculate distance
            const dist = Math.sqrt(
                Math.pow(
                    cursorPositionX[cursorPositionX.length-1] - cursorPositionX[cursorPositionX.length-2], 2
                ) +
                Math.pow(
                    cursorPositionY[cursorPositionY.length-1] - cursorPositionY[cursorPositionY.length-2], 2
                )
            )
            cursorDistances.push(dist)
        }
    })
}

