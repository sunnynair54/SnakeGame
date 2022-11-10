// Snake and state
// let snake = {
//     body: [[10, 5], [10, 6], [10, 7], [10, 8]],
//     nextDirection: [1, 0]
// }

// let gameState = {
//     apple: [11, 8],
//     snake: snake 
//          snake is stationary
//          snake is moving 
/* direction of snake*/
//          snake is stationary since it died
//          
// }
// ********************Render Function*************//

let lastFrame = 0
let speed = 2

function render(currentFrame) {
    window.requestAnimationFrame(render);
    const secsOfLastFrame = (currentFrame - lastFrame) / 1000
    // console.log(currentFrame); 
    lastFrame = currentFrame;
    // console.log(secsOfLastFrame);

    if (secsOfLastFrame < 1 / speed) {
        return;
    }
    // console.log('speedtest')
}
window.requestAnimationFrame(render);


// *************************Snake********************//

