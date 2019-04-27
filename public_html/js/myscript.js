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
    $('.formbox').after('<div class = "underform"></div>');
    $('.underform').append('<button type="button" class="btn btn-success btn-md">\n\
    Block level button</button>');
    $('.underform').hide();
    $('.formbox').hide();
    $('.underform button').click(function(){
            showButtons();
            hideFormBox();
            
    });  
    $('#btn1 button, #btn2 button').click(function(){
        hideButtons();
        showFormBox();
        $('.formbox').prepend('<p></p>');
        $('p').append('<label for="from">с:</label> <input type="text" id="from" name="from"/>');
        $('p').append('<label for="to">до:</label> <input type="text" id="to" name="to"/>');
        var dates = $("#from, #to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onSelect: function(selectedDate){
            var option = this.id == "from" ? "minDate" : "maxDate",
            instance = $( this ).data( "datepicker" ),
            date = $.datepicker.parseDate(
            instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
            selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
            }
        });            
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
    $('.underform').show();
}

function hideFormBox() {
    $('.formbox').empty();
    $('.formbox').hide();
    $('.underform').hide();
}
