
function ShoeFinder(data) {
    var myCart = [];
    var shoeList = data || [];
    var popup = "";

    var shoe = "";
    var price = 0;
    var color = "";
    var size = "";
    var in_stock = 0;

    function setShoe(shoeV, priceV, colorV, sizeV, in_stockV) {
        shoe = shoeV;
        price = priceV;
        color = colorV;
        size = sizeV;
        in_stock = in_stockV;
    }

    function setShoeList() {
        shoeList.push({
            shoe,
            price,
            color,
            size,
            in_stock,
        })
    }

    function addMyShoe(shoe, size, color, price, in_stock) {
        const cartShoe =
            (shoe) + Number(size) + (color) + Number(price) + Number(in_stock)

        shoeList.push(cartShoe);
    }

    function getShoes() {
        return shoeList;
    }

    function cartShoes(shoe, size, color, price, in_stock) {
        alert(in_stock)
        var inCart = { shoe, size, color, price, in_stock }
        myCart.push(inCart);
    }

    function getCart() {
        return myCart
    }

    function cartCounter() {
        return myCart.length;
    }

    function addToShoes(shoe, size, color, price, ) {
        var stockShoe = shoe;
        var stockSize = size;
        var stockColor = color;
        var stockPrice = price;
        var myStock = stock

        for (let t = 0; t < tShoes.length; t++) {
            if (stockShoe === tShoes[t].shoe && stockSize === tShoes[t].size && stockColor === tShoes[t].color && stockPrice === tShoes[i].price) {
                validStock = true;
                tShoes[t].stock += myStock;
                return true;

            }

        }
    }


    return {
        addMyShoe,
        getShoes,
        cartShoes,
        getCart,
        cartCounter,
        addToShoes,
        setShoe,
        setShoeList

    }
}