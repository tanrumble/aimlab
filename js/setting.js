//init
const setting = $('#setting')
let dotColor = 'red'
let enemySpawn = 1
let sensitivity = 0.6

$('#dot-color').on('input',el=>{
    const colorVal = $('#dot-color').val()
    if (isColor(colorVal)==true) {
        dotColor = colorVal
    } else {
        dotColor = 'red'
    }
})
$('#enemy-spawn').on('input',el=>{
    const spawnVal = $('#enemy-spawn').val()
    if (isNaN(spawnVal)==false && spawnVal.length > 0) {
        enemySpawn = parseInt(spawnVal)
    }
})
$('#sensitivity').on('input',el=>{
    const sensVal = $('#sensitivity').val()
    if (isNaN(sensVal)==false && sensVal.length > 0) {
        sensitivity = parseFloat(sensVal)
    }
})


function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}