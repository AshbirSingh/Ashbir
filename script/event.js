clickBox = document.querySelector('.click')
spinBox = document.querySelector ('.spin')
moveBox= document. querySelector ('.move')
hoverBox= document. querySelector ('.hover')
dblclickBox = document.querySelector('.dblclick')
console.log("HELLO")


colors = ['blue', 'green','purple', 'red']
index = 0
clickBox.addEventListener('click',() => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.size) {
        index = 0
    }
clickBox.style.color = 'white'
})

x=0
y=o

spinBox.addEventListener('click', ()  => {
    spinBox.classList.toggle('start')

})


document.addEventListener('keydown', (event) => {

        if (event.key == 'ArrowRight') {x = x + 10}
        if (event.key == 'ArrowUp') {y = y - 10}
        if (event.key == 'ArrowLeft') {x = x - 10}
        if (event.key == 'ArrowDown') {y = y + 10}
        moveBox.style.transform = 'translate(${x}px, ${y}px)'


})

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.transform = "scale"
    //hoverBox.style.height ="20px"
    //hoverBox.style.widht = "100px"
})

hoverBox.addEventListener('mouseleave', ()=> {
    hoverBox.style.transofmr = "scale(1)"

})

dblclickBox.addEventListener("dblclick", () => {
    
})
