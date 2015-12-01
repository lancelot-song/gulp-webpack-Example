var $ = require('./zepto.min.js');

$("#ui_menu_icon").on("touchend",function(){
    $("#ui_menu_list").toggle();
});