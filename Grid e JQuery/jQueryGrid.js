

$(function(){

    removerBox();
    adicionarBox();

})


function removerBox(){

    $('.remover').on('click',function(){ 
    
        $('.container :last-child').remove()
    })

}

function adicionarBox(){


    $('.adicionar').on('click',function(){ 
    
        $('.container').append('<div class="box1"> <h1>Olá</h1> </div>')
    })

}