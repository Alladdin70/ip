///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
'use strict';
var is_hide = true;
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
    $('body').append('<div class = "formbox"></div>');
    $('.formbox').append('<button type="button" class="btn btn-success btn-md">\n\
Block level button</button>');
    $('.formbox').hide();
//    $('#btn3 button').prop("disabled",true)
//    $('#btn1 button').prop("disabled",false)
    $('#btn1 button').click(function(){
            hideButtons();
            showFormBox();
    });
    $('.formbox button').click(function(){
            showButtons();
            hideFormBox();
    });
});

function hideButtons(){
    $('.row').hide();
}

function showButtons() {
    $('.row').show();
}

function showFormBox() {
    $('.formbox').show();
}

function hideFormBox() {
    $('.formbox').hide();
}
