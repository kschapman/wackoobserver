$(document).ready(function(){

//Film
  $(".index-film").mouseenter(function(){
    $('.index-fade-film').show();
    $('.index-film').hide();
  });

  $(".index-fade-film").mouseleave(function(){
    $('.index-fade-film').hide();
    $('.index-film').show();
  });

//Screenplays
  $(".index-screenplays").mouseenter(function(){
    $('.index-fade-screenplays').show();
    $('.index-screenplays').hide();
  });

  $(".index-fade-screenplays").mouseleave(function(){
    $('.index-fade-screenplays').hide();
    $('.index-screenplays').show();
  });

//Music Videos
  $(".index-music").mouseenter(function(){
    $('.index-fade-music').show();
    $('.index-music').hide();
  });

  $(".index-fade-music").mouseleave(function(){
    $('.index-fade-music').hide();
    $('.index-music').show();
  });

//Hozho
  $(".index-hozho").mouseenter(function(){
    $('.index-fade-hozho').show();
    $('.index-hozho').hide();
  });

  $(".index-fade-hozho").mouseleave(function(){
    $('.index-fade-hozho').hide();
    $('.index-hozho').show();
  });

//BAIK
  $(".index-baik").mouseenter(function(){
    $('.index-fade-baik').show();
    $('.index-baik').hide();
  });

  $(".index-fade-baik").mouseleave(function(){
    $('.index-fade-baik').hide();
    $('.index-baik').show();
  });

//The Intrigue
  $(".index-intrigue").mouseenter(function(){
    $('.index-fade-intrigue').show();
    $('.index-intrigue').hide();
  });

  $(".index-fade-intrigue").mouseleave(function(){
    $('.index-fade-intrigue').hide();
    $('.index-intrigue').show();
  });

//Websites
  $(".index-websites").mouseenter(function(){
    $('.index-fade-websites').show();
    $('.index-websites').hide();
  });

  $(".index-fade-websites").mouseleave(function(){
    $('.index-fade-websites').hide();
    $('.index-websites').show();
  });

//Photography
  $(".index-photography").mouseenter(function(){
    $('.index-fade-photography').show();
    $('.index-photography').hide();
  });

  $(".index-fade-photography").mouseleave(function(){
    $('.index-fade-photography').hide();
    $('.index-photography').show();
  });

//Credits-Close
  $('.close-enough').click(function(){
    $('.credits-close').toggle();
  });

//Credits-Reverie
    $('.reverie').click(function(){
      $('.credits-reverie').toggle();
    });


//Hamburger
$("#burger-container").click(function(){
  $(this).toggleClass("open");
  $('#slide').toggle();
});


$('#slide li a').click(function(){
  $('#slide').hide();
  $('#burger-container').toggleClass("open");
});


});

$(window).resize(function(){
  if ($(window).width()>1024) {
    $('#slide').hide();
    $('#burger-container').removeClass("open");
  }
});
