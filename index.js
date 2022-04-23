console.log("hello")

const itemsForSale = [
    {
        id: "coffee-pot",
        price: 50.99,
        name: "Coffee Pot",
        description: "Makes black coffee!",
        image:"https://m.media-amazon.com/images/I/719O25cLP2S._AC_SX466_.jpg"
    },
    {
        id: "coffee-grinder",
        price: 65.00,
        name: "Coffee Grinder",
        description: "Grinds coffee grounds!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqbX4Ppww8HhGBvH1na9lddkr9RNCzjxgJw&usqp=CAU"
    }
]


const shoppingCart = [0]

const itemsSlot = document.getElementById("items-slot")

function itemToDisplayHtml(itemsForSale){
    const html = `
        <div>
            <h4>${item.name}</h4>
            <img src=${item.image}>
            <p>${item.description}</p>
            <em>${item.price}</em>
            <button onclick="addItemToCart">Add item to cart</button>
        </div>
    `
    return html
}

function addItemToCart(id){
    shoppingCart.push(id)
}

function addItemsForSaleToPage(){
    for(var i=0; i< itemsForSale.length; i++){
       const item =  itemsForSale[i]
       const htmlForItem = itemToDisplayHtml
       const appendableElement = document.createElement(<div></div>)
       appendableElement.innerHTML = htmlForItem
       itemsSlot.append(appendableElement)
    }
}

