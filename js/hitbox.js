let dotPos = 0

body.click(el=>{
    scene.forEach((target,index)=>{
        if (target.Name == 'dot') {
            dotPos = target.X
        }
        if (target.Name == 'target') {
            const minX = target.X
            const maxX = target.X + target.Width
            const minY = target.Y
            const maxY = target.Y + target.Height
            if (dotPos >= minX && dotPos <= maxX && dotPos >= minY && dotPos <= maxY) {
                scene.splice(index,1)
                let pps = Math.sqrt(Math.pow(pixelX,2) + Math.pow(pixelY,2))
                //hitung path deviation
                let travelLength = 0
                cursorDistances.forEach(el=>{
                    travelLength += el
                })
                travelLength = pps / travelLength
                travelLength = Math.round((travelLength + Number.EPSILON) * 100)
                $('#pd').text(travelLength + '%')
                //hitung pixel per ms
                const dt = Date.now() - travelTime
                pps = pps * sensitivity / dt
                pps = Math.round((pps + Number.EPSILON) * 100) / 100
                $('#tt').text(pps + ' px/ms')
                //hitung overall score
                const overall = pps * travelLength
                scores.push(overall)
                let totalPoint = 0
                scores.forEach(el=>{
                    totalPoint += el
                })
                totalPoint = totalPoint / scores.length
                $('#sc').text(totalPoint + ' points')
                //reset
                travelTime = Date.now()
                pixelX = 0
                pixelY = 0
                cursorPositionX = [0]
                cursorPositionY = [0]
                cursorDistances = []
            }
        }
    })
})