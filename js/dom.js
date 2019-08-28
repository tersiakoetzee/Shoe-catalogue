var filterBtn = document.querySelector('.filterBtn');
var colourSelection = document.querySelector('.colours');
var shoeSelection = document.querySelector('.shoes');
var sizeSelection = document.querySelector('.sizes');

var tempsource = document.querySelector(".shoeCart").innerHTML;
var userTemplate = Handlebars.compile(tempsource);

var myShoe = ShoeFinder()



function showFilterdShoes () {
   
}

filterBtn.addEventListener("click", showFilterdShoes);