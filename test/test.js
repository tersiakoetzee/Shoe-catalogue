describe("Shoe Finder", function () {

    it(" should return the amount of shoes on hand", function () {
        var findShoe = ShoeFinder();

        findShoe.shoeList("crocs-sneakers");
        findShoe.shoeList("cinderella-nikes");
        findShoe.shoeList("woderland-vans");
        findShoe.shoeList("ladys-boots");
        findShoe.shoeList("crossover-heal");
        findShoe.shoeList("black-wedge");
      
      

        assert.deepEqual( [
            { color: 'black', shoe: 'black-wedge', price: 350, size: 7, in_stock: 5, id: 1 },
            { color: 'blue', shoe: 'cinderella-nikes', price: 275, size: 10, in_stock: 4, id: 2 },
            { color: 'white', shoe: 'crocs-sneakers', price: 350, size: 7, in_stock: 12, id: 3 },
            { color: 'red', shoe: 'crossover-heal', price: 450, size: 6, in_stock: 8, id: 4 },
            { color: 'grey', shoe: 'ladys-boots', price: 275, size: 9, in_stock: 6, id: 5 },
            { color: 'white', shoe: 'woderland-vans', price: 275, size: 9, in_stock: 6, id: 5 }
        ],findShoe.returnAllShoes())
    })

    it(" should return selected shoe to the cart", function () {
        var findShoe = ShoeFinder();

        findShoe.checkOut( { color: 'black', shoe: 'black-wedge', price: 350, size: 7, in_stock: 5, id: 1 });
      

        assert.deepEqual(findShoe.returnCart())
    })
    });