spawning()
function spawning() {
    requestAnimationFrame(spawning)
    if (scene.length == 1) {
        travelTime = Date.now()
        for (let i=0; i < enemySpawn; i++) {
            console.log(Math.random() * canvas[0].width)
            scene.push(new Square('target','purple',12,12,(Math.random()*2-1) * canvas[0].width/2,(Math.random()*2-1) * canvas[0].height/2))
        }
    }
}
