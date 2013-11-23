// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });

$(document).ready(function() {
  var counter = 0;
  //fades welcome text
  setInterval(function() {
    welcome = ["Welcome.", "こんにちは。", "Bánh mì.", "오랜만이다 ", "Bienvenido.", "歡迎光臨"];
    $('#welcome').fadeOut("slow", function() {
      $('#welcome').text(welcome[counter]);
      $('#welcome').fadeIn("slow");
    });
    
    counter++;
    if(counter === welcome.length - 1) {
      counter = 0;
    }
  }, 3000)();
})();
