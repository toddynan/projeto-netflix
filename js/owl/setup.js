$('.owl-carousel').owlCarousel({
    loop:true, // navegação infinita
    margin:10, // margem entre 1 filme e outro
    nav:false, // botaozinho de navegação em baixo
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        } // mais de 1000 px, coloca 5 itens/filmes na tela
    } // responsividade (adaptação do layout ao tamanho da tela)
})