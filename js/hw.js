(function(){

"use strict";

// console.log("I am in hw.js");


$(".photos")
  .find("li")
      .on("click", function zooming(){
        $(this).toggleClass("zoomed");
        $("main").toggleClass("zooming");
        $(".zoomed").append($("nav"));

  });


  $(".next")
    .on("click", function next(){
      $(this).parent().parent().next("li")
        .toggleClass("zoomed")
        .append($("nav"));
      $("main").removeClass();

    });

    $(".previous")
      .on("click", function next(){
        $(this).parent().parent().prev("li")
          .toggleClass("zoomed")
          .append($("nav"));
        $("main").removeClass();


      });


})();
