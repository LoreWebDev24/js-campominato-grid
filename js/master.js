gameGridDOMElement = document.querySelector('.game-grid')
// console.log(gameGridDOMElement)

startGameBtnDOMElement = document.getElementById('start-game')
// console.log(startGameBtnDOMElement)

startGameBtnDOMElement.addEventListener('click', function (){

    gameGridDOMElement.innerHTML = ''

    for (let i = 0; i < 100 ; i++) {

        let n = i + 1
        // console.log(n)

        const htmlCell = `<div class="cell">${n}</div>`

        gameGridDOMElement.innerHTML = gameGridDOMElement.innerHTML + htmlCell

    }
})