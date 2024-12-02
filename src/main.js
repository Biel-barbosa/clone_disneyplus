document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    const questions = document.querySelectorAll('[data-faq-question]')


    const heroSection = document.querySelector('.hero') 
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultaElementosHeader()
        } else{
            exibeElementosHeader()
        }
    })

    //seção de atrações, programação das abas
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
    
    //seção faq, acordion
    for (let i = 0; i<questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

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