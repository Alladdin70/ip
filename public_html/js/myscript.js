///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
var is_hide = false;
$(document).ready(function(){
    $('<header class = "myheader"></header>').insertBefore('body');
    $('body').prepend('<div class = "container"></div>');
    $('.container').prepend('<div class = "row"></div>');
    $('.row').prepend('<div class = "col-md-4" id = "btn1"></div>');
    $('.row').prepend('<div class = "col-md-4" id = "btn2"></div>');
    $('.row').prepend('<div class = "col-md-4" id = "btn3"></div>');
    $('#btn1').append('<button type="button" class="btn btn-success btn-md \n\
btn-block">Block level button</button>');
    $('#btn2').append('<button type="button" class="btn btn-success btn-md \n\
btn-block">Block level button</button>');    
    $('#btn3').append('<button type="button" class="btn btn-success btn-md \n\
btn-block">Block level button</button>');
    $('body').prepend('<div class = "titlebox"></div>');
    $('.titlebox').append('<div class = "title"></div>');
    $('.title').text("It 's the titlebox");
//    $('#btn3 button').prop("disabled",true)
//    $('#btn1 button').prop("disabled",false)
   // $('.container row')prop("display", "none");
    $('#btn1 button').click(function(){
            is_hide ? is_hide = false:is_hide= true;
            console.log(is_hide);
            if(is_hide){
                $('.title').show();
            }else {
                $('.title').hide();
            }
    });
});
