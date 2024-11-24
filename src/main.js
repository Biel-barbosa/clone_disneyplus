document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('show__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('show__tabs__button--is-active')
        })  
    }
    
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i<buttons.length;i++){
        buttons[i].classList.remove('show__tabs__button--is-active')
    }
}

function escondeTodasAbas(){
    const tabContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i<tabContainer.length;i++){
        tabContainer[i].classList.remove('show__list--is-active')
    }
}