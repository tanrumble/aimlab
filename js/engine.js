//init
const body = $('body')
const canvas = $('canvas')
const ctx = canvas[0].getContext('2d')
canvasSize(0.9)
settingMenu()

let scene = [new Square('dot','red',3,3,0,0)]
onUpdate()
function onUpdate() {
    requestAnimationFrame(onUpdate)
    ctx.clearRect(0,0,canvas[0].width,canvas[0].height)
    scene.forEach(el=>{
        el.Update()
        if (el.Name == 'dot') {
            el.Color = dotColor
        }
    })

}

function canvasSize(persen) {
    canvas[0].width = window.innerHeight * persen
    canvas[0].height = window.innerHeight * persen
    canvas.css('margin-left', window.innerWidth/2 - canvas[0].width/2)
}

function settingMenu() {
    const pos = canvas[0].getBoundingClientRect()
    setting.css('top',pos.y)
}

function Square(name, color, width, height, x, y) {
    this.Name = name
    this.Color = color
    this.Width = width
    this.Height = height
    this.X = x + canvas[0].width/2 - this.Width/2
    this.Y = y + canvas[0].height/2 - this.Height/2
    this.Update = ()=>{
        ctx.beginPath()
        ctx.rect(this.X,this.Y,this.Width,this.Height)
        ctx.fillStyle = this.Color
        ctx.fill()
    }
}

