(function(){

"use strict";

console.log("I am in hw.js");
console.log($("main"));

$(".photos")
  .find("li")
      .on("click", function zooming(){
        $(this).toggleClass("zoomed")
        $(this).closest("main").toggleClass("zooming");
        $(this).append($("nav"));




      })















})();
