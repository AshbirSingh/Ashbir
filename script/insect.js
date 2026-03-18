screens = document.querySelectorALL('.screen')
choose_insect_btns = document.querySelectorALL('.choose-insect-btn')
start_btn = document.getElementById('start-btn')


start_btn.addEventListener('click', () => {
    screens[0]. classlist.add('up')
})

for (let i = 0; i < choose_insect_btns.length; i = i + 1)
{
    choose)insect_btnsp[i].addEventListener('click', () => {
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
