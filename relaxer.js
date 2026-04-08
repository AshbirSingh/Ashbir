container = document.getElementbyId('container')
text = document.getElementById('text')

totalTime = 7500
breathTime = (totalTime / 5) * 2
holdTime = totalTime / 5

breathAnimation()

function breathAnimation() {
    text.innterText = 'Breath In!'
    container.classList.add('grow')

    setTimeout(?, holdTime)
}
