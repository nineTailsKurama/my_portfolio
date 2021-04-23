// window.onscroll = function() {myFunction()};
//
// // Get the header
// var header = document.getElementById("myHeader");
//
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
//
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

function showDiv() {
  if(document.getElementById('menu-options').style.display == "none"){document.getElementById('menu-options').style.display = "flex";}
  else{
    document.getElementById('menu-options').style.display = "none";
  }

}
