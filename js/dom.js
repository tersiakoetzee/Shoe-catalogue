const shoeSearch = document.querySelector(".shoeSearch");
const shoes = document.querySelector(".shoes");
const colours = document.querySelector(".colours");
const sizes = document.querySelector(".sizes");
const prices = document.querySelector(".prices");
const filterBtn = document.querySelector(".filterBtn");
const error = document.querySelector(".error");
const mycart = document.querySelector(".mycart");
const addStock = document.querySelector(".addStock");
const addStockButton = document.querySelector(".addStockButton");
const addedStock = document.querySelector(".addedStock");
const shoeTotal = document.querySelector(".shoeTotal")
const addShoe = document.querySelector(".addShoe")
const addSize = document.querySelector(".addSize")
const addPrice = document.querySelector(".addPrice")
const addColor= document.querySelector(".addColor")
const addstock = document.querySelector(".addstock")
const tempsource = document.querySelector(".shoeCart").innerHTML;
const userTemplate = Handlebars.compile(tempsource);

const myShoe = ShoeFinder()



function showFilterdShoes () {
    var currentShoe = shoes.value;
    var currentSize = sizes.value;
    var currentPrice = prices.value;
    var currentColor = colours.value;
   
    myShoe.cartShoes(currentShoe, currentSize, currentColor, currentPrice,);

    var mySelection = myShoe.getCart()
    shoeTotal.innerHTML = myShoe.cartCounter();
    mycart.innerHTML = userTemplate({ cart: mySelection });
    console.log(currentColor);
    

}
console.log(shoeList);

function addsToStock(){
    const addShoe = document.querySelector(".addShoe").value
    const addSize = document.querySelector(".addSize").value
    const addPrice = document.querySelector(".addPrice").value
    const addColor= document.querySelector(".addColor").value
    const addstock = document.querySelector(".addstock").value

    // var currentListShoe = shoe.value;
    // var currentListSize = size.value;
    // var currentListPrice = prices.value;
    // var currentListColor = colours.value;

    // myShoe.addToShoes(currentListShoe,currentListSize,currentListPrice,currentListColor);
    myShoe.setShoe(addShoe,addSize,addPrice,addColor,addstock);
    var newList = shoeList;
    console.log(shoeList);

    var newShoe = myShoe.addToShoes()
    addStock.innerHTML = myShoe.addToShoes()
    addStock.innerHTML = userTemplate({ cart: newShoe });

}
addStockButton.addEventListener("click", addsToStock)
filterBtn.addEventListener("click", showFilterdShoes);