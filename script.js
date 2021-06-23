const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

$('.btn-info').click(function(){
    $('.infoadd').slideToggle();
    $('.btn-info').toggleClass('flip')
})

$('.btn-info2').click(function(){
    $('.infoadd2').slideToggle();
    $('.btn-info2').toggleClass('flip')
})

$('.btn-info3').click(function(){
    $('.infoadd3').slideToggle();
    $('.btn-info3').toggleClass('flip')
})

$('.btn-info4').click(function(){
    $('.infoadd4').slideToggle();
    $('.btn-info4').toggleClass('flip')
})

$('.btn-info5').click(function(){
    $('.infoadd5').slideToggle();
    $('.btn-info5').toggleClass('flip')
})

$('.btn-info6').click(function(){
    $('.infoadd6').slideToggle();
    $('.btn-info6').toggleClass('flip')
})

function atualizar_informacoes() {
    $("#nome").text( $(".slick-center").data("name") );
    var itensprice = parseFloat($(".slick-center").data("price")).toLocaleString("pt-BR", {style:"currency", currency: "BRL", minimumFractionDigits: 2});
    $("#itens-price").text( itensprice );
  }

  $(".galeria").on('init', function(){
    atualizar_informacoes();
  });

  $(".galeria").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".galeria").on('afterChange', function(){
    atualizar_informacoes();
  });

//Efeito maquina de escrever
  function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach( function(letra, i){
      setTimeout(function(){
        elemento.innerHTML += letra;
      }, 75 * i)
    })
  }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);
  