  
function ShoeFinder (storedShoes, storedCart) {
    var shoeData = [
        { color: 'black', shoe: 'black-wedge', price: 350, size: 7, in_stock: 5, id: 1 },
        { color: 'blue', shoe: 'cinderella-nikes', price: 275, size: 10, in_stock: 4, id: 2 },
        { color: 'white', shoe: 'crocs-sneakers', price: 350, size: 7, in_stock: 12, id: 3 },
        { color: 'red', shoe: 'crossover-heal', price: 450, size: 6, in_stock: 8, id: 4 },
        { color: 'grey', shoe: 'ladys-boots', price: 275, size: 9, in_stock: 6, id: 5 },
        { color: 'white', shoe: 'woderland-vans', price: 275, size: 9, in_stock: 6, id: 5 }
    ];

    var cart = [];
    var shoeArr = [];
    function shoeList(){
    if (storedShoes && storedShoes.length > 0) {
        shoeData = [];
        for (var i = 0; i < storedShoes.length; i++) {
            shoeData.push(storedShoes[i]);
        }
    }
}
  
    // function shoeMatch (selectedColour, selectedShoes, selectedSize) {
    //     shoeArr = [];

    //    var shoeSize = selectedSize;
    //     shoeData.forEach(function (currentData) {
    //         if (selectedColour === currentData.color || selectedColour === '') {
    //             if (selectedShoes === currentData.shoe || selectedShoes === '') {
    //                 if (shoeSize === currentData.size || shoeSize) {
    //                     shoeArr.push(currentData);
    //                 }
    //             }
    //         }
    //     });
    //     return shoeArr;
    // }

    function errorMessage () {
       return errorMessage
    }


    function addToBasket (shoeSelectedId) {
        for (var i = 0; i < shoeData.length; i++) {
           var currentShoe = shoeData[i];
            if (currentShoe.id === shoeSelectedId) {
                if (currentShoe.in_stock > 0) {
                 
                  
                   var shoeInCart = cart.find((current) => {
                        return current.id === shoeSelectedId;
                    });
                    if (!shoeInCart) {
                        currentShoe.in_stock--;
                        cart.unshift({
                            id: currentShoe.id,
                            color: currentShoe.color,
                            brand: currentShoe.shoe,
                            price: currentShoe.price,
                            size: currentShoe.size,
                            qty: 1

                        });
                    } else {
                        currentShoe.in_stock;
                        shoeInCart.qty++;
                        shoeInCart.price += currentShoe.price;
                    } console.log(currentShoe);
                }
            }
        }
    }


    function checkOut () {
        return cart = [];
    }

    function returnCart () {
        return cart;
    }

    function returnAllShoes () {
        return shoeData;
    }

    return {
        shoeList,
        returnAllShoes,
        // shoeMatch,
        errorMessage,
        addToBasket,
        returnCart,
        checkOut
    };
}