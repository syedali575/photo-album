(function(){

"use strict";

console.log("I am in hw.js");
// console.log($("main"));

$(".photos")
  .find("li")
      .on("click", function zooming(){
        $(this).toggleClass("zoomed");
        $("main").addClass("zooming");
        $(".zoomed").append($("nav"));

  });

$(".previous")
  .on("click", function previous(){
      // $(this).stopPropagation();

    $(".zoomed").prev()
      .addClass("zoomed");
    $(".zoomed").prev()
      .removeClass("zoomed");
    $(".zoomed").append($("nav"));

          // console.log($(this).parent().parent());
          // console.log($(this).parent().parent().prev("li"));
      // .closest("main").toggleClass("zooming")
    // $(this).parent().parent().parent().parent().toggleClass("zooming")
      // .append($("nav"));

    // this.parentNode.parentNode.parentNode.next("img");

  });

  $(".next")
    .on("click", function next(){
      $(this).parent().parent().next("li")
        .toggleClass("zoomed")
        // .closest("main").toggleClass("zooming")
        .append($("nav"));
      // this.parentNode.parentNode.parentNode.next("img");

    });











})();
