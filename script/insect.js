screens = document.querySelectorALL('.screen')
choose_insect_btns = document.querySelectorALL('.choose-insect-btn')
start_btn = document.getElementById('start-btn')
game_container = document. querySelector('.game-container')


start_btn.addEventListener('click', () => {
    screens[0]. classlist.add('up')
})

for (let i = 0; i < choose_insect_btns.length; i = i + 1)
{
    choose.insect_btnsp[i].addEventListener('click', () => {
        screens[1].classList.add('up')
        img = choose_insect_btns[1].querySelector('img')
        src = img.getAttribute('src')
        alt = img.getAttribute('alt')
        startGame()
    })
}


function startGame() {
    setTimeout(createInsect,1000)
}


function createInsect() {
    console.log("hello")
    insenct = document.createElement('div')
    insect.classList.add('insect')
    {x,y} getRandomLocation()
    insect.style.top = '$(y)px'
    insect.style.left = '$(x)px'
    insect.inner.HTML = 'img src="${src}" alt="${src}" style= "transform: rotate(${Math.random()*})'
    game_container.appendChild(insect)


}

function getRandomLocation() {
    width= window.innerWidth
    height = window.innerHeight
    x=Math.random()*(width -200) + 100
    y=Math.random()*(height-200) + 100
    return(x,y)

}

function catchInsect(){
    this.classList.add('caught')
    this.remove(), 2000
    setTimeout( () => this.remove(), 2000)
    addInsects()
}
