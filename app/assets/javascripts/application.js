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
    welcome = ["&nbsp;&nbsp;&nbsp; Hello.", "&nbsp;&nbsp;&nbsp; 今日は。", "&nbsp;&nbsp;&nbsp; Chào đón.", "&nbsp;&nbsp;&nbsp; 안녕하세요 ", 
               "&nbsp;&nbsp;&nbsp; Hola.", "&nbsp;&nbsp;&nbsp; 你好", "&nbsp;&nbsp;&nbsp; Hallo.", "&nbsp;&nbsp;&nbsp; مرحبا"];
    $('#welcome').fadeOut("slow", function() {
      $('#welcome').html(welcome[counter]);
      $('#welcome').fadeIn("slow");
    });
    
    counter++;
    if(counter === welcome.length) {
      counter = 0;
    }
  }, 3200);
  
});
